from fastapi import FastAPI, APIRouter, WebSocket, WebSocketDisconnect
from fastapi.staticfiles import StaticFiles
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from typing import Dict, List
import json
from datetime import datetime
from bson import ObjectId

from routes import auth, users, conversations, messages
from auth import decode_token

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Set database for all route modules
auth.set_database(db)
users.set_database(db)
conversations.set_database(db)
messages.set_database(db)

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Health check endpoint
@api_router.get("/")
async def root():
    return {"message": "Aeterna Chat API is running"}

# Include all route modules
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(users.router, prefix="/users", tags=["users"])
api_router.include_router(conversations.router, prefix="/conversations", tags=["conversations"])
api_router.include_router(messages.router, prefix="/messages", tags=["messages"])

# Include the router in the main app
app.include_router(api_router)

# Serve uploaded files
uploads_dir = Path("/app/backend/uploads")
uploads_dir.mkdir(exist_ok=True)
app.mount("/api/uploads", StaticFiles(directory=str(uploads_dir)), name="uploads")

# WebSocket connection manager
class ConnectionManager:
    def __init__(self):
        self.active_connections: Dict[str, WebSocket] = {}
    
    async def connect(self, user_id: str, websocket: WebSocket):
        await websocket.accept()
        self.active_connections[user_id] = websocket
        # Update user status to online
        await db.users.update_one(
            {"_id": ObjectId(user_id)},
            {"$set": {"status": "online", "lastSeen": datetime.utcnow()}}
        )
        logging.info(f"User {user_id} connected to WebSocket")
    
    def disconnect(self, user_id: str):
        if user_id in self.active_connections:
            del self.active_connections[user_id]
        logging.info(f"User {user_id} disconnected from WebSocket")
    
    async def send_personal_message(self, message: str, user_id: str):
        if user_id in self.active_connections:
            try:
                await self.active_connections[user_id].send_text(message)
            except Exception as e:
                logging.error(f"Error sending message to {user_id}: {e}")
    
    async def broadcast_to_conversation(self, message: dict, conversation_id: str, exclude_user: str = None):
        # Get conversation participants
        conv = await db.conversations.find_one({"_id": ObjectId(conversation_id)})
        if conv:
            for participant_id in conv["participantIds"]:
                if participant_id != exclude_user and participant_id in self.active_connections:
                    try:
                        await self.active_connections[participant_id].send_text(json.dumps(message))
                    except Exception as e:
                        logging.error(f"Error broadcasting to {participant_id}: {e}")

manager = ConnectionManager()

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket, token: str = None):
    if not token:
        await websocket.close(code=1008)
        return
    
    try:
        # Decode token to get user_id
        payload = decode_token(token)
        user_id = payload.get("sub")
        if not user_id:
            await websocket.close(code=1008)
            return
        
        await manager.connect(user_id, websocket)
        
        try:
            while True:
                data = await websocket.receive_text()
                message_data = json.loads(data)
                
                # Handle different message types
                if message_data.get("type") == "new_message":
                    # Broadcast to conversation participants
                    await manager.broadcast_to_conversation(
                        message_data,
                        message_data["conversationId"],
                        exclude_user=user_id
                    )
                elif message_data.get("type") == "message_reaction":
                    # Broadcast reaction update
                    await manager.broadcast_to_conversation(
                        message_data,
                        message_data["conversationId"]
                    )
                elif message_data.get("type") == "typing":
                    # Broadcast typing indicator
                    await manager.broadcast_to_conversation(
                        message_data,
                        message_data["conversationId"],
                        exclude_user=user_id
                    )
        except WebSocketDisconnect:
            manager.disconnect(user_id)
            # Update user status to offline
            await db.users.update_one(
                {"_id": ObjectId(user_id)},
                {"$set": {"status": "offline", "lastSeen": datetime.utcnow()}}
            )
    except Exception as e:
        logging.error(f"WebSocket error: {e}")
        await websocket.close(code=1011)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()