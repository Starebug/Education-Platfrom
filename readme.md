Quiz Management Backend
This is the backend for a Quiz Management System. It handles operations such as creating quizzes, checking answers, deleting quizzes, and managing courses. The backend is built using Node.js, Express, and MongoDB.

Table of Contents
Technologies Used
Installation
API Endpoints
Courses
Quizzes
Request/Response Examples
Error Handling
Conclusion
Technologies Used
Node.js: JavaScript runtime for building the server.
Express.js: Web framework for Node.js.
MongoDB: NoSQL database for storing course and quiz data.
Mongoose: ODM (Object Data Modeling) library for MongoDB.
Swagger: API documentation generator.
Installation
Prerequisites:
Install Node.js and npm from Node.js Official Website.
Set up a MongoDB instance either:
Locally.
Using a cloud service like MongoDB Atlas.
Steps to Install:
Clone the repository:

bash
Copy code
git clone <repository-url>
cd <repository-folder>
Install dependencies:

bash
Copy code
npm install
Set up the MongoDB connection:

Obtain the connection string:

For MongoDB Atlas, copy the URI (usually starts with mongodb+srv://).
For local MongoDB, ensure MongoDB is installed and running locally.
Create a .env file from the example provided:

bash
Copy code
cp .env.example .env
Configure the .env file:

Update the .env file with your MongoDB URI.
Example for MongoDB Atlas:

env
Copy code
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
Example for local MongoDB:

env
Copy code
MONGO_URI=mongodb://localhost:27017/quiz-management
Start the application:

bash
Copy code
npm run dev
The server will be running at:
http://localhost:5000

API Endpoints
Courses
Create a Course

Method: POST
Endpoint: /api/courses
Description: Create a new course.
Request Body:
json
Copy code
{
  "courseId": "CS101",
  "courseName": "Computer Science 101",
  "description": "Introductory course to computer science."
}
Response:
json
Copy code
{
  "courseId": "CS101",
  "courseName": "Computer Science 101",
  "description": "Introductory course to computer science."
}
Get All Courses

Method: GET
Endpoint: /api/courses
Description: Fetch a list of all courses.
Get Course by ID

Method: GET
Endpoint: /api/courses/:courseId
Description: Fetch a specific course by its courseId.
Path Parameter:
courseId: The ID of the course to retrieve.
Response:
json
Copy code
{
  "courseId": "CS101",
  "courseName": "Computer Science 101",
  "description": "Introductory course to computer science."
}
Update Course

Method: PUT
Endpoint: /api/courses/:courseId
Description: Update an existing course.
Path Parameter:
courseId: The ID of the course to update.
Request Body:
json
Copy code
{
  "courseName": "Updated Course Name",
  "description": "Updated description"
}
Delete Course

Method: DELETE
Endpoint: /api/courses/:courseId
Description: Delete a specific course by its courseId.
Quizzes
Create a Quiz for a Course

Method: POST
Endpoint: /api/courses/:courseId/quizzes
Description: Create a new quiz for a course.
Path Parameter:
courseId: The ID of the course.
Request Body:
json
Copy code
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
json
Copy code
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
Get All Quizzes for a Course

Method: GET
Endpoint: /api/courses/:courseId/quizzes
Description: Fetch all quizzes for a specific course.
Get a Specific Quiz

Method: GET
Endpoint: /api/quizzes/:quizId
Description: Fetch a specific quiz by its quizId.
Check the Answer for a Question

Method: GET
Endpoint: /api/quizzes/:quizId/check-answer
Description: Check if a given answer is correct for a specific question in a quiz.
Path Parameter:
quizId: The ID of the quiz.
Query Parameters:
questionId: The ID of the question.
answer: The provided answer.
Response:
json
Copy code
{
  "message": "Correct answer"
}
Delete a Quiz

Method: DELETE
Endpoint: /api/quizzes/:quizId
Description: Delete a quiz by its quizId.
Error Handling
All API responses follow standard HTTP status codes:

200 OK: The request was successful.
201 Created: A resource was successfully created.
400 Bad Request: The request was malformed or invalid.
404 Not Found: The requested resource was not found.
500 Internal Server Error: An unexpected error occurred on the server.
Conclusion
This backend provides robust functionality for managing quizzes and courses, including creating, updating, deleting, and checking answers. It is built with scalability in mind and uses MongoDB to store data persistently.

For additional information, refer to the Swagger API Documentation.

Let me know if further modifications are needed!