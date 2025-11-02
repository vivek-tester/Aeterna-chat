from fastapi import APIRouter, Depends, HTTPException, status
from bson import ObjectId
from auth import get_current_user

router = APIRouter()

db = None


def set_database(database):
    global db
    db = database


@router.get("")
async def get_users(current_user_id: str = Depends(get_current_user)):
    # Get all users except current user
    users = await db.users.find(
        {"_id": {"$ne": ObjectId(current_user_id)}}
    ).to_list(100)
    
    # Format users
    formatted_users = []
    for user in users:
        user["_id"] = str(user["_id"])
        user.pop("password", None)
        formatted_users.append(user)
    
    return {"users": formatted_users}


@router.get("/{user_id}")
async def get_user(user_id: str, current_user_id: str = Depends(get_current_user)):
    if not ObjectId.is_valid(user_id):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid user ID"
        )
    
    user = await db.users.find_one({"_id": ObjectId(user_id)})
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found"
        )
    
    user["_id"] = str(user["_id"])
    user.pop("password", None)
    return {"user": user}
