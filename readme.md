# Quiz Management Backend

Backend system for quiz management built with Node.js, Express, and MongoDB.

## Tech Stack 🛠️
- Node.js (Runtime)
- Express.js (Framework)
- MongoDB (Database)
- Mongoose (ODM)
- Swagger (Documentation)

## Setup 🚀
### Prerequisites
- Node.js & npm ([Download](https://nodejs.org/))
- MongoDB (local/[Atlas](https://www.mongodb.com/cloud/atlas))

### Installation
```bash
# Clone & Navigate
git clone <repository-url>
cd <repository-folder>

# Install Dependencies
npm install

# Configure MongoDB
cp .env.example .env

# Start Server
npm run dev
```

### Environment Setup
```env
# Atlas MongoDB
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>

# Local MongoDB
MONGO_URI=mongodb://localhost:27017/quiz-management
```

## API Reference 📚

### Courses

#### Create Course
`POST /api/courses`
```json
// Request
{
  "courseId": "CS101",
  "courseName": "Computer Science 101",
  "description": "Introductory CS course"
}

// Response (201 Created)
{
  "message": "Course created successfully",
  "course": {
    "courseId": "CS101",
    "courseName": "Computer Science 101",
    "description": "Introductory CS course"
  }
}
```

#### Get Courses
`GET /api/courses`
```json
// Response (200 OK)
{
  "courses": [
    {
      "courseId": "CS101",
      "courseName": "Computer Science 101",
      "description": "Introductory CS course"
    }
  ]
}
```

#### Get Course
`GET /api/courses/:courseId`
```json
// Response (200 OK)
{
  "course": {
    "courseId": "CS101",
    "courseName": "Computer Science 101",
    "description": "Introductory CS course"
  }
}

// Error (404 Not Found)
{
  "message": "Course not found"
}
```

#### Update Course
`PUT /api/courses/:courseId`
```json
// Request
{
  "courseName": "Updated Course Name",
  "description": "Updated description"
}

// Response (200 OK)
{
  "message": "Course updated successfully",
  "course": {
    "courseId": "CS101",
    "courseName": "Updated Course Name",
    "description": "Updated description"
  }
}
```

#### Delete Course
`DELETE /api/courses/:courseId`
```json
// Response (200 OK)
{
  "message": "Course deleted successfully"
}
```

### Quizzes

#### Create Quiz
`POST /api/courses/:courseId/quizzes`
```json
// Request
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

// Response (201 Created)
{
  "message": "Quiz created successfully",
  "quiz": {
    "quizId": "quiz1",
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
}
```

#### Get Course Quizzes
`GET /api/courses/:courseId/quizzes`
```json
// Response (200 OK)
{
  "quizzes": [
    {
      "quizId": "quiz1",
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
  ]
}
```

#### Validate Answer
`GET /api/quizzes/:quizId/check-answer?questionId=q1&answer=4`
```json
// Response (200 OK)
{
  "message": "Correct answer"
}

// Error (400 Bad Request)
{
  "message": "Incorrect answer"
}
```

#### Delete Quiz
`DELETE /api/quizzes/:quizId`
```json
// Response (200 OK)
{
  "message": "Quiz deleted successfully"
}
```
## Error Handling ⚠️

| Status Code | Description |
|------------|-------------|
| 200 | Success |
| 201 | Resource Created |
| 400 | Bad Request |
| 404 | Not Found |
| 500 | Server Error |
Notes

Check Swagger docs for detailed specifications\
Ensure MongoDB is running before startup