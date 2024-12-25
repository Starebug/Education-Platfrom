# Quiz Management Backend

This is the backend for a Quiz Management System. It handles operations such as creating quizzes, checking answers, deleting quizzes, and managing courses. The backend is built using Node.js, Express, and MongoDB.

## Table of Contents
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
  - [Courses](#courses)
  - [Quizzes](#quizzes)
- [Request/Response Examples](#requestresponse-examples)
- [Error Handling](#error-handling)

## Technologies Used
- **Node.js**: JavaScript runtime for building the server.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing course and quiz data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **Swagger**: API documentation generator.

## Installation

### Prerequisites:
1. **Node.js** and **npm** must be installed on your system. You can download and install them from [here](https://nodejs.org/).
2. **MongoDB** instance running locally or using a cloud service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

### Steps to Install:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
Install dependencies:

npm install
Set up the MongoDB connection:

If you're using MongoDB Atlas (cloud-based database):
Go to MongoDB Atlas and create a new project and cluster.
Obtain the connection string (usually starts with mongodb+srv://).
If you're using local MongoDB, ensure MongoDB is installed and running locally.
Create a .env file by copying the example provided:

cp .env.example .env
Configure the .env file:

Open .env file in your editor and paste the MongoDB connection URL from Atlas or use the local MongoDB connection URL.

Example for MongoDB Atlas:

php
Copy code
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
Example for local MongoDB:

MONGO_URI=mongodb://localhost:27017/quiz-management
Start the application:

npm run dev
The server will be running at http://localhost:5000.

API Endpoints
Courses
1. Create a Course
Method: POST
Endpoint: /api/courses
Description: Create a new course.
Request Body:
{
  "courseId": "CS101",
  "courseName": "Computer Science 101",
  "description": "Introductory course to computer science."
}
Response:
{
  "courseId": "CS101",
  "courseName": "Computer Science 101",
  "description": "Introductory course to computer science."
}

2. Get All Courses
Method: GET
Endpoint: /api/courses
Description: Fetch a list of all courses.

3. Get Course by ID
Method: GET
Endpoint: /api/courses/:courseId
Description: Fetch a specific course by its courseId.
Path Parameter:
courseId: The ID of the course to retrieve.
Response:
{
  "courseId": "CS101",
  "courseName": "Computer Science 101",
  "description": "Introductory course to computer science."
}

4. Update Course
Method: PUT
Endpoint: /api/courses/:courseId
Description: Update an existing course.
Path Parameter:
courseId: The ID of the course to update.
Request Body:
{
  "courseName": "Updated Course Name",
  "description": "Updated description"
}

5. Delete Course
Method: DELETE
Endpoint: /api/courses/:courseId
Description: Delete a specific course by its courseId.


Quizzes
1. Create a Quiz for a Course
Method: POST
Endpoint: /api/courses/:courseId/quizzes
Description: Create a new quiz for a course.
Path Parameter:
courseId: The ID of the course to associate the quiz with.
Request Body:
{
  "questions": [
    {
      "id": "q1",
      "question": "What is 2 + 2?",
      "options": ["3", "4", "5", "6"],
      "correctAnswer": "4"
    }
  ]
}
Response:
{
  "courseId": "CS101",
  "questions": [
    {
      "id": "q1",
      "question": "What is 2 + 2?",
      "options": ["3", "4", "5", "6"],
      "correctAnswer": "4"
    }
  ]
}

2. Get All Quizzes for a Course
Method: GET
Endpoint: /api/courses/:courseId/quizzes
Description: Fetch all quizzes for a specific course.
Path Parameter:
courseId: The ID of the course.

3. Get a Specific Quiz
Method: GET
Endpoint: /api/quizzes/:quizId
Description: Fetch a specific quiz by its quizId.
Path Parameter:
quizId: The ID of the quiz to retrieve.

4. Check the Answer for a Question
Method: GET

Endpoint: /api/quizzes/:quizId/check-answer

Description: Check if a given answer is correct for a specific question in a quiz.

Path Parameter:

quizId: The ID of the quiz.
Query Parameters:

questionId: The ID of the question.
answer: The provided answer.
Response:

{
  "message": "Correct answer"
}

5. Delete a Quiz
Method: DELETE
Endpoint: /api/quizzes/:quizId
Description: Delete a quiz by its quizId.
Path Parameter:
quizId: The ID of the quiz to delete.
Request/Response Examples

1. Create a Course
Request:
POST /api/courses
Body:
{
  "courseId": "CS101",
  "courseName": "Computer Science 101",
  "description": "Introductory course to computer science."
}

Response:
{
  "courseId": "CS101",
  "courseName": "Computer Science 101",
  "description": "Introductory course to computer science."
}

2. Create a Quiz for a Course
Request:
POST /api/courses/CS101/quizzes
Body:

{
  "questions": [
    {
      "id": "q1",
      "question": "What is 2 + 2?",
      "options": ["3", "4", "5", "6"],
      "correctAnswer": "4"
    }
  ]
}
Response:

{
  "courseId": "CS101",
  "questions": [
    {
      "id": "q1",
      "question": "What is 2 + 2?",
      "options": ["3", "4", "5", "6"],
      "correctAnswer": "4"
    }
  ]
}
Error Handling
All API responses follow standard HTTP status codes:

200 OK: The request was successful.
201 Created: A resource was successfully created.
400 Bad Request: The request was malformed or invalid.
404 Not Found: The requested resource was not found.
500 Internal Server Error: An unexpected error occurred on the server.
Conclusion
This backend provides robust functionality for managing quizzes and courses, including creating, updating, deleting, and checking answers. It is built with scalability in mind and uses MongoDB to store data persistently.

For additional information, please refer to the Swagger API Documentation.

### Key Additions:
- **MongoDB Connection**: Instructions on how to configure MongoDB connection using the `.env` file.
- **.env.example**: A copy of the example `.env` file that the user should modify with their MongoDB URI.

By following these setup instructions, the user can easily connect to MongoDB and run the backend locally or in the cloud.





