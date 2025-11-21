# Overview

This server powers the backend API for the Downey Auto Spa web application. It handles form submissions, processes quote requests, validates required fields, and securely stores customer data in MongoDB Atlas. Built with Node.js, Express, and MongoDB, the server follows a clean, modular structure and is designed for reliability, scalability, and easy future expansion.

## Tech Stack

Node.js – runtime environment

Express.js – API routing and middleware

MongoDB Atlas – cloud database

Mongoose – schema modeling

Cors – cross-origin requests

Dotenv – environment variable management

Nodemon (dev) – auto-restart during development

Features

RESTful API endpoints for form submissions and quote requests

Input validation to ensure required fields (name, email, phone, message)

Secure database connection using the MongoDB Atlas URI

Environment variable separation for production and development

Structured logging for server and database status

Scalable file structure, ready for additional routes or services

### Setup & Installation

1. Clone the repository
   git clone <your-repo-url>
   cd server

2. Install dependencies
   npm install

3. Create a .env file
   PORT=3001
   MONGO_URI=your_mongodb_atlas_connection_string

4. Start the server
   Development (with Nodemon):
   npm run dev

#### Production:

npm start

The server will run at:
http://localhost:3001

##### API Endpoints

POST /api/form

Submit a quote or contact request.

Example Body:

{
"name": "John Doe",
"email": "john@example.com",
"phone": "270-555-0000",
"message": "Interested in ceramic coating."
}

Returns:

Success message

Stored form data

Error if required fields are missing

###### Error Handling

The server includes clear JSON error responses for:

Missing or invalid fields

Database connection issues

Internal server errors

Deployment

This backend can be deployed to:

Render

Railway

Google Cloud Run

Heroku (legacy)

Environment variables are required on all platforms.

Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to modify.

License

MIT
