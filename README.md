# Activity Booking App

The **Activity Booking App** is a Node.js-based application that allows users to register, sign in, and manage activities. It uses MongoDB as the database and Mongoose for object modeling.

---

## Features

- User Registration and Authentication
- Activity Creation, Deletion, and Updates
- User-Activity Relationship Management
- RESTful API Endpoints
- Input Validation Middleware

---

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or later)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)
- [Git](https://git-scm.com/)

---

## Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/PRANAV8966/ActivityBookingApp.git

cd activitybookingapp

2. Install Dependencies
```npm install```

3. Environment Variables
Create a .env file in the root directory and add the following variables:
```PORT=3000
MONGO_SERVER_URL=<YOUR_MONGODB_URL>
JWT_KEY=your_secret_key
SALT_ROUNDS=10```

4. Run the Application
Start the server:

```npm start```

5.Project Structure

```activitybookingapp/
├── src/
│   ├── config/
│   │   ├── db-config.js          # MongoDB connection setup
│   │   └── server-config.js      # Environment variable configuration
│   ├── controller/
│   │   ├── user-controller.js    # User-related API logic
│   │   └── activity-controller.js # Activity-related API logic
│   ├── middleware/
│   │   └── validate-request.js   # Middleware for input validation
│   ├── model/
│   │   ├── user-model.js         # User schema and model
│   │   └── activity-model.js     # Activity schema and model
│   ├── repository/
│   │   ├── user-repository.js    # User database operations
│   │   └── activity-repository.js # Activity database operations
│   ├── routes/
│   │   └── [index.js](http://_vscodecontentref_/0)              # API routes
│   └── services/
│       ├── user-service.js       # User business logic
│       └── activity-service.js   # Activity business logic
├── .env                          # Environment variables
├── [package.json](http://_vscodecontentref_/1)                  # Project metadata and dependencies
└── README.md                     # Project documentation```

6.API Endpoints
User Routes
Method	 Endpoint	        Description
POST	 /signUp	        Register a new user
POST	 /signIn	        Authenticate a user
POST	 /isAuthenticated	Verify user authentication
GET	     /getUser/:id	    Fetch user details by ID

Activity Routes
Method	 Endpoint	         Description
GET	     /activities	     Fetch all activities
GET	     /Activity/:id	     Fetch activity by ID
POST	 /activityBooking	 Create a new activity
PATCH	 /updateActivity/:id Update an activity by ID
DELETE	 /deleteActivity	 Delete an activity

Usage
1. Register a User
```POST /signUp
Content-Type: application/json

{
    "email": "demo@gmail.com",
    "password": "password123",
    "name": "Demo User",
    "phone_number": "1234567890"
}```

2. Sign In
```POST /signIn
Content-Type: application/json

{
    "email": "demo@gmail.com",
    "password": "password123"
}```

3. Create an Activity
```POST /activityBooking
Content-Type: application/json
{
    "title": "Hiking",
    "description": "A fun hiking activity",
    "location": {
        "address": "123 Mountain Road",
        "city": "Denver",
        "state": "CO",
        "pincode": "80202"
    },
    "dateTime": "2025-05-10T10:00:00.000Z",
    "userId": "681cbff0c25be3fcf7c1b13d"
}```

