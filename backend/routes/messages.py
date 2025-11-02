from fastapi import APIRouter, Depends, HTTPException, status, UploadFile, File
from bson import ObjectId
from datetime import datetime
from auth import get_current_user
from models import MessageCreate, MessageReaction
import os
import uuid
import aiofiles

router = APIRouter()

db = None


def set_database(database):
    global db
    db = database


@router.get("/{conversation_id}")
async def get_messages(
    conversation_id: str,
    current_user_id: str = Depends(get_current_user)
):
    # Verify user is participant
    conv = await db.conversations.find_one({"_id": ObjectId(conversation_id)})
    if not conv:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Conversation not found"
        )
    
    if current_user_id not in conv["participantIds"]:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="You are not a participant in this conversation"
        )
    
    # Get messages
    messages = await db.messages.find(
        {"conversationId": conversation_id}
    ).sort("timestamp", 1).to_list(1000)
    
    # Format messages
    formatted_messages = []
    for msg in messages:
        msg["_id"] = str(msg["_id"])
        formatted_messages.append(msg)
    
    return {"messages": formatted_messages}


@router.post("", status_code=status.HTTP_201_CREATED)
async def send_message(
    message_data: MessageCreate,
    current_user_id: str = Depends(get_current_user)
):
    # Verify conversation exists and user is participant
    conv = await db.conversations.find_one({"_id": ObjectId(message_data.conversationId)})
    if not conv:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Conversation not found"
        )
    
    if current_user_id not in conv["participantIds"]:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="You are not a participant in this conversation"
        )
    
    # Create message
    msg_dict = {
        "conversationId": message_data.conversationId,
        "senderId": current_user_id,
        "text": message_data.text,
        "type": message_data.type,
        "imageUrl": message_data.imageUrl,
        "reactions": [],
        "read": False,
        "timestamp": datetime.utcnow()
    }
    
    result = await db.messages.insert_one(msg_dict)
    msg_dict["_id"] = str(result.inserted_id)
    
    # Update conversation's updatedAt
    await db.conversations.update_one(
        {"_id": ObjectId(message_data.conversationId)},
        {"$set": {"updatedAt": datetime.utcnow()}}
    )
    
    return {"message": msg_dict}


@router.put("/{message_id}/react")
async def react_to_message(
    message_id: str,
    reaction_data: MessageReaction,
    current_user_id: str = Depends(get_current_user)
):
    if not ObjectId.is_valid(message_id):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid message ID"
        )
    
    msg = await db.messages.find_one({"_id": ObjectId(message_id)})
    if not msg:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Message not found"
        )
    
    # Verify user is participant in conversation
    conv = await db.conversations.find_one({"_id": ObjectId(msg["conversationId"])})
    if not conv or current_user_id not in conv["participantIds"]:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="You are not a participant in this conversation"
        )
    
    # Toggle reaction
    reactions = msg.get("reactions", [])
    if reaction_data.emoji in reactions:
        reactions.remove(reaction_data.emoji)
    else:
        reactions.append(reaction_data.emoji)
    
    # Update message
    await db.messages.update_one(
        {"_id": ObjectId(message_id)},
        {"$set": {"reactions": reactions}}
    )
    
    # Get updated message
    updated_msg = await db.messages.find_one({"_id": ObjectId(message_id)})
    updated_msg["_id"] = str(updated_msg["_id"])
    
    return {"message": updated_msg}


@router.post("/upload")
async def upload_file(
    file: UploadFile = File(...),
    current_user_id: str = Depends(get_current_user)
):
    # Validate file type
    allowed_types = ["image/jpeg", "image/png", "image/gif", "image/webp"]
    if file.content_type not in allowed_types:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Only image files are allowed"
        )
    
    # Create uploads directory if not exists
    upload_dir = "/app/backend/uploads"
    os.makedirs(upload_dir, exist_ok=True)
    
    # Generate unique filename
    file_extension = file.filename.split(".")[-1]
    unique_filename = f"{uuid.uuid4()}.{file_extension}"
    file_path = os.path.join(upload_dir, unique_filename)
    
    # Save file
    async with aiofiles.open(file_path, "wb") as f:
        content = await file.read()
        await f.write(content)
    
    # Return URL
    file_url = f"/api/uploads/{unique_filename}"
    return {"url": file_url}
