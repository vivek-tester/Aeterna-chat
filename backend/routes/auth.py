from fastapi import APIRouter, HTTPException, Depends, status
from motor.motor_asyncio import AsyncIOMotorDatabase
from models import UserSignup, UserLogin, UserResponse
from auth import get_password_hash, verify_password, create_access_token, get_current_user
from bson import ObjectId
from datetime import datetime
import os

router = APIRouter()

# We'll inject the database
db = None


def set_database(database):
    global db
    db = database


@router.post("/signup", status_code=status.HTTP_201_CREATED)
async def signup(user_data: UserSignup):
    # Check if user already exists
    existing_user = await db.users.find_one({"email": user_data.email})
    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already registered"
        )
    
    # Check if username already exists
    existing_username = await db.users.find_one({"username": user_data.username})
    if existing_username:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Username already taken"
        )
    
    # Create user
    user_dict = {
        "name": user_data.name,
        "username": user_data.username,
        "email": user_data.email,
        "password": get_password_hash(user_data.password),
        "avatar": f"https://api.dicebear.com/7.x/avataaars/svg?seed={user_data.username}",
        "bio": "",
        "status": "online",
        "lastSeen": datetime.utcnow(),
        "createdAt": datetime.utcnow()
    }
    
    result = await db.users.insert_one(user_dict)
    user_id = str(result.inserted_id)
    
    # Create access token
    access_token = create_access_token(data={"sub": user_id})
    
    # Return user and token
    user_dict["_id"] = user_id
    user_dict.pop("password")
    
    return {
        "user": user_dict,
        "token": access_token
    }


@router.post("/login")
async def login(user_data: UserLogin):
    # Find user
    user = await db.users.find_one({"email": user_data.email})
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password"
        )
    
    # Verify password
    if not verify_password(user_data.password, user["password"]):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password"
        )
    
    # Update user status to online
    await db.users.update_one(
        {"_id": user["_id"]},
        {"$set": {"status": "online", "lastSeen": datetime.utcnow()}}
    )
    
    # Create access token
    user_id = str(user["_id"])
    access_token = create_access_token(data={"sub": user_id})
    
    # Return user and token
    user["_id"] = user_id
    user.pop("password")
    
    return {
        "user": user,
        "token": access_token
    }


@router.get("/me")
async def get_me(current_user_id: str = Depends(get_current_user)):
    user = await db.users.find_one({"_id": ObjectId(current_user_id)})
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found"
        )
    
    user["_id"] = str(user["_id"])
    user.pop("password")
    return {"user": user}
