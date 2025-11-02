from fastapi import APIRouter, Depends, HTTPException, status
from bson import ObjectId
from datetime import datetime
from typing import List
from auth import get_current_user
from models import ConversationCreate

router = APIRouter()

db = None


def set_database(database):
    global db
    db = database


@router.get("")
async def get_conversations(current_user_id: str = Depends(get_current_user)):
    # Get all conversations where current user is a participant
    conversations = await db.conversations.find(
        {"participantIds": current_user_id}
    ).to_list(100)
    
    # Format conversations with last message and participant details
    formatted_conversations = []
    for conv in conversations:
        conv["_id"] = str(conv["_id"])
        
        # Get last message
        last_message = await db.messages.find_one(
            {"conversationId": conv["_id"]},
            sort=[("timestamp", -1)]
        )
        
        if last_message:
            last_message["_id"] = str(last_message["_id"])
            conv["lastMessage"] = last_message
        else:
            conv["lastMessage"] = None
        
        # Get unread count
        unread_count = await db.messages.count_documents({
            "conversationId": conv["_id"],
            "senderId": {"$ne": current_user_id},
            "read": False
        })
        conv["unreadCount"] = unread_count
        
        # Get participant details
        participants = []
        for participant_id in conv["participantIds"]:
            user = await db.users.find_one({"_id": ObjectId(participant_id)})
            if user:
                user["_id"] = str(user["_id"])
                user.pop("password", None)
                participants.append(user)
        conv["participants"] = participants
        
        formatted_conversations.append(conv)
    
    # Sort by last message timestamp
    formatted_conversations.sort(
        key=lambda x: x["lastMessage"]["timestamp"] if x["lastMessage"] else x["createdAt"],
        reverse=True
    )
    
    return {"conversations": formatted_conversations}


@router.post("", status_code=status.HTTP_201_CREATED)
async def create_conversation(
    conv_data: ConversationCreate,
    current_user_id: str = Depends(get_current_user)
):
    # Validate participant IDs
    participant_ids = list(set([current_user_id] + conv_data.participantIds))
    
    for pid in participant_ids:
        if not ObjectId.is_valid(pid):
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=f"Invalid participant ID: {pid}"
            )
    
    # For direct chat, check if conversation already exists
    if conv_data.type == "direct":
        if len(participant_ids) != 2:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Direct conversation must have exactly 2 participants"
            )
        
        existing = await db.conversations.find_one({
            "type": "direct",
            "participantIds": {"$all": participant_ids, "$size": 2}
        })
        
        if existing:
            # Return existing conversation
            existing["_id"] = str(existing["_id"])
            
            # Get participants
            participants = []
            for pid in existing["participantIds"]:
                user = await db.users.find_one({"_id": ObjectId(pid)})
                if user:
                    user["_id"] = str(user["_id"])
                    user.pop("password", None)
                    participants.append(user)
            existing["participants"] = participants
            existing["lastMessage"] = None
            existing["unreadCount"] = 0
            
            return {"conversation": existing}
    
    # Create new conversation
    conv_dict = {
        "type": conv_data.type,
        "name": conv_data.name,
        "avatar": conv_data.avatar or f"https://api.dicebear.com/7.x/shapes/svg?seed={conv_data.name or 'chat'}",
        "participantIds": participant_ids,
        "createdAt": datetime.utcnow(),
        "updatedAt": datetime.utcnow()
    }
    
    result = await db.conversations.insert_one(conv_dict)
    conv_dict["_id"] = str(result.inserted_id)
    
    # Get participants
    participants = []
    for pid in participant_ids:
        user = await db.users.find_one({"_id": ObjectId(pid)})
        if user:
            user["_id"] = str(user["_id"])
            user.pop("password", None)
            participants.append(user)
    conv_dict["participants"] = participants
    conv_dict["lastMessage"] = None
    conv_dict["unreadCount"] = 0
    
    return {"conversation": conv_dict}


@router.get("/{conversation_id}")
async def get_conversation(
    conversation_id: str,
    current_user_id: str = Depends(get_current_user)
):
    if not ObjectId.is_valid(conversation_id):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid conversation ID"
        )
    
    conv = await db.conversations.find_one({"_id": ObjectId(conversation_id)})
    if not conv:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Conversation not found"
        )
    
    # Check if user is participant
    if current_user_id not in conv["participantIds"]:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="You are not a participant in this conversation"
        )
    
    conv["_id"] = str(conv["_id"])
    
    # Get participants
    participants = []
    for pid in conv["participantIds"]:
        user = await db.users.find_one({"_id": ObjectId(pid)})
        if user:
            user["_id"] = str(user["_id"])
            user.pop("password", None)
            participants.append(user)
    conv["participants"] = participants
    
    return {"conversation": conv}
