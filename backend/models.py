from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional, Literal, Annotated
from datetime import datetime
from bson import ObjectId
from pydantic.json_schema import JsonSchemaValue
from pydantic_core import core_schema


class PyObjectId(str):
    @classmethod
    def __get_pydantic_core_schema__(
        cls, source_type, handler
    ) -> core_schema.CoreSchema:
        return core_schema.union_schema([
            core_schema.is_instance_schema(ObjectId),
            core_schema.chain_schema([
                core_schema.str_schema(),
                core_schema.no_info_plain_validator_function(cls.validate),
            ])
        ], serialization=core_schema.plain_serializer_function_ser_schema(
            lambda x: str(x)
        ))

    @classmethod
    def validate(cls, v):
        if isinstance(v, ObjectId):
            return v
        if isinstance(v, str) and ObjectId.is_valid(v):
            return ObjectId(v)
        raise ValueError("Invalid ObjectId")


class User(BaseModel):
    id: Optional[PyObjectId] = Field(default_factory=PyObjectId, alias="_id")
    name: str
    username: str
    email: EmailStr
    password: str
    avatar: Optional[str] = None
    bio: Optional[str] = ""
    status: Literal["online", "offline", "away"] = "offline"
    lastSeen: datetime = Field(default_factory=datetime.utcnow)
    createdAt: datetime = Field(default_factory=datetime.utcnow)

    model_config = {
        "populate_by_name": True,
        "arbitrary_types_allowed": True,
        "json_encoders": {ObjectId: str}
    }


class UserResponse(BaseModel):
    id: str = Field(alias="_id")
    name: str
    username: str
    email: EmailStr
    avatar: Optional[str]
    bio: Optional[str]
    status: str
    lastSeen: datetime

    model_config = {"populate_by_name": True}


class UserSignup(BaseModel):
    name: str
    username: str
    email: EmailStr
    password: str


class UserLogin(BaseModel):
    email: EmailStr
    password: str


class Conversation(BaseModel):
    id: Optional[PyObjectId] = Field(default_factory=PyObjectId, alias="_id")
    type: Literal["direct", "group"]
    name: Optional[str] = None
    avatar: Optional[str] = None
    participantIds: List[str]
    createdAt: datetime = Field(default_factory=datetime.utcnow)
    updatedAt: datetime = Field(default_factory=datetime.utcnow)

    model_config = {
        "populate_by_name": True,
        "arbitrary_types_allowed": True,
        "json_encoders": {ObjectId: str}
    }


class ConversationCreate(BaseModel):
    type: Literal["direct", "group"]
    participantIds: List[str]
    name: Optional[str] = None
    avatar: Optional[str] = None


class Message(BaseModel):
    id: Optional[PyObjectId] = Field(default_factory=PyObjectId, alias="_id")
    conversationId: str
    senderId: str
    text: Optional[str] = None
    type: Literal["text", "image"] = "text"
    imageUrl: Optional[str] = None
    reactions: List[str] = []
    read: bool = False
    timestamp: datetime = Field(default_factory=datetime.utcnow)

    model_config = {
        "populate_by_name": True,
        "arbitrary_types_allowed": True,
        "json_encoders": {ObjectId: str}
    }


class MessageCreate(BaseModel):
    conversationId: str
    text: Optional[str] = None
    type: Literal["text", "image"] = "text"
    imageUrl: Optional[str] = None


class MessageReaction(BaseModel):
    emoji: str
