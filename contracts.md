# Aeterna Chat - Backend Implementation Contracts

## API Endpoints

### Authentication
- **POST /api/auth/signup** - Register new user
  - Body: `{ name, username, email, password }`
  - Returns: `{ user, token }`
  
- **POST /api/auth/login** - User login
  - Body: `{ email, password }`
  - Returns: `{ user, token }`
  
- **GET /api/auth/me** - Get current user
  - Headers: `Authorization: Bearer {token}`
  - Returns: `{ user }`

### Users
- **GET /api/users** - Get all users (for new chat)
  - Headers: `Authorization: Bearer {token}`
  - Returns: `{ users[] }`
  
- **GET /api/users/{userId}** - Get user by ID
  - Headers: `Authorization: Bearer {token}`
  - Returns: `{ user }`

### Conversations
- **GET /api/conversations** - Get all conversations for current user
  - Headers: `Authorization: Bearer {token}`
  - Returns: `{ conversations[] }`
  
- **POST /api/conversations** - Create new conversation
  - Headers: `Authorization: Bearer {token}`
  - Body: `{ type: 'direct'|'group', participantIds: [], name?: string }`
  - Returns: `{ conversation }`
  
- **GET /api/conversations/{conversationId}** - Get conversation details
  - Headers: `Authorization: Bearer {token}`
  - Returns: `{ conversation }`

### Messages
- **GET /api/messages/{conversationId}** - Get messages for conversation
  - Headers: `Authorization: Bearer {token}`
  - Returns: `{ messages[] }`
  
- **POST /api/messages** - Send new message
  - Headers: `Authorization: Bearer {token}`
  - Body: `{ conversationId, text, type?: 'text'|'image' }`
  - Returns: `{ message }`
  
- **PUT /api/messages/{messageId}/react** - Add/remove reaction
  - Headers: `Authorization: Bearer {token}`
  - Body: `{ emoji }`
  - Returns: `{ message }`
  
- **POST /api/messages/upload** - Upload media file
  - Headers: `Authorization: Bearer {token}`
  - Body: FormData with file
  - Returns: `{ url }`

### WebSocket
- **WS /ws** - Real-time messaging
  - Connection with token in query: `ws://localhost:8001/ws?token={token}`
  - Events:
    - `new_message` - New message received
    - `message_updated` - Message reaction updated
    - `user_status` - User online/offline status

## MongoDB Collections

### users
```
{
  _id: ObjectId,
  name: string,
  username: string,
  email: string,
  password: string (hashed),
  avatar: string,
  bio: string,
  status: 'online' | 'offline' | 'away',
  lastSeen: Date,
  createdAt: Date
}
```

### conversations
```
{
  _id: ObjectId,
  type: 'direct' | 'group',
  name: string (for groups),
  avatar: string (for groups),
  participantIds: [ObjectId],
  createdAt: Date,
  updatedAt: Date
}
```

### messages
```
{
  _id: ObjectId,
  conversationId: ObjectId,
  senderId: ObjectId,
  text: string,
  type: 'text' | 'image',
  imageUrl: string (optional),
  reactions: [string],
  read: boolean,
  timestamp: Date
}
```

## Mock Data to Replace

In `mock.js`:
- `currentUser` → from localStorage and API
- `users` → from GET /api/users
- `conversations` → from GET /api/conversations
- `messages` → from GET /api/messages/{conversationId}

## Frontend Changes Required

1. Create `src/services/api.js` - Axios instance with auth headers
2. Create `src/services/websocket.js` - WebSocket connection manager
3. Create `src/context/AuthContext.jsx` - Auth state management
4. Update Login.jsx - Call real API
5. Update Signup.jsx - Call real API
6. Update ChatPage.jsx - Fetch conversations from API, establish WebSocket
7. Update Sidebar.jsx - Use real users API for new chat/group
8. Update ChatWindow.jsx - Send messages via API, listen to WebSocket
9. Remove mock.js dependency

## Backend Implementation Steps

1. Set up MongoDB models (User, Conversation, Message)
2. Implement JWT authentication (signup, login, middleware)
3. Create user endpoints
4. Create conversation endpoints
5. Create message endpoints
6. Implement WebSocket for real-time messaging
7. Add file upload handling
8. CORS and security setup
