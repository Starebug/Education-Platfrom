# Quiz Management Backend

A comprehensive backend system for managing quizzes, handling quiz creation, answer validation, and course management. Built with Node.js, Express, and MongoDB.

## Technologies Used 🛠️

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling tool
- **Swagger** - API documentation

## Installation 🚀

### Prerequisites

- Node.js & npm ([Download](https://nodejs.org/))
- MongoDB (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

### Setup Instructions

1. **Clone Repository**
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure MongoDB**
   - Create `.env` from template:
     ```bash
     cp .env.example .env
     ```
   - Update `.env` with MongoDB URI:
     ```
     # For MongoDB Atlas
     MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>

     # For Local MongoDB
     MONGO_URI=mongodb://localhost:27017/quiz-management
     ```

4. **Start Server**
   ```bash
   npm run dev
   ```
   Server runs at `http://localhost:5000`

## API Documentation 📚

### Course Management

#### Create Course
- **POST** `/api/courses`
  ```json
  {
    "courseId": "CS101",
    "courseName": "Computer Science 101",
    "description": "Introductory CS course"
  }
  ```

#### Get Courses
- **GET** `/api/courses` - List all courses
- **GET** `/api/courses/:courseId` - Get specific course

#### Update Course
- **PUT** `/api/courses/:courseId`
  ```json
  {
    "courseName": "Updated Course Name",
    "description": "Updated description"
  }
  ```

#### Delete Course
- **DELETE** `/api/courses/:courseId`

### Quiz Management

#### Create Quiz
- **POST** `/api/courses/:courseId/quizzes`
  ```json
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
  ```

#### Get Quizzes
- **GET** `/api/courses/:courseId/quizzes` - List course quizzes
- **GET** `/api/quizzes/:quizId` - Get specific quiz

#### Answer Validation
- **GET** `/api/quizzes/:quizId/check-answer`
  - Query params: `questionId`, `answer`
  ```json
  {
    "message": "Correct answer"
  }
  ```

#### Delete Quiz
- **DELETE** `/api/quizzes/:quizId`

## Error Handling ⚠️

| Status Code | Description |
|------------|-------------|
| 200 | Success |
| 201 | Resource Created |
| 400 | Bad Request |
| 404 | Not Found |
| 500 | Server Error |

## Response Examples 📝

### Course Creation
```json
{
  "courseId": "CS101",
  "courseName": "Computer Science 101",
  "description": "Introductory CS course"
}
```

### Quiz Creation
```json
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
```

For detailed API specifications, refer to the Swagger documentation included with the project.