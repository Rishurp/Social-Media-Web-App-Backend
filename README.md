# Social Media Web App - Backend

This repository contains the backend API for the **LinkLeap** social media web application. It handles data storage, authentication, and serves API requests for the frontend of the application.

## Features

- User authentication and authorization (JWT-based)
- CRUD operations for posts, comments, likes, and user profiles
- Follows, notifications, and real-time updates
- RESTful API structure
- Secure password hashing
- Integration with MongoDB for data storage

## Technologies Used

- **Node.js**
- **Express.js**: Web framework for creating the API
- **MongoDB**: Database for storing user and post data
- **Mongoose**: ODM for MongoDB
- **JWT (JSON Web Tokens)**: For authentication
- **bcrypt**: For secure password hashing
- **dotenv**: For environment variables management

## Prerequisites

- [Node.js](https://nodejs.org/) installed
- MongoDB set up locally or via [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Backend environment configuration (`.env` file)

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/yourusername/social-media-backend.git
cd social-media-backend
```

### Install Dependencies

```bash
npm install
```

### Set up Environment Variables

Create a `.env` file in the root directory and add the following:

```plaintext
PORT = 8082
MONGODB_URL = "paste your mongodb url here"
JWT_SECRET_KEY = "write your jwt key  here"
JWT_EXPIRE_IN_MINUTES = 1d
```

### Run the Backend Server

```bash
npm start
```

The backend API will now be running on `http://localhost:8082`.

## API Endpoints

### Authentication

- `POST /auth/register` - Register a new user
- `POST /auth/login` - Log in with credentials

### Posts

- `GET /posts` - Retrieve all posts
- `POST /posts` - Create a new post
- `PUT /posts/:id` - Update an existing post
- `DELETE /posts/:id` - Delete a post

### Users

- `GET /users/:id` - Get user profile details
- `PUT /users/:id` - Update user profile



## Deployment

To deploy this backend, you can use services like:

- **Heroku**
- **Render**
- **DigitalOcean**

Make sure to configure your environment variables accordingly on the hosting platform.

## Contributing

Feel free to fork this repository, create a feature branch, and submit a pull request.

## License

This project is licensed under the MIT License.

