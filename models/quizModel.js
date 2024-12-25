const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  quizid: {type: String, required:true, unique:true},
  courseId: { type: String, required: true },
    questions: [
      {
        id: { type: String, required: true},
        question: { type: String, required: true },
        options: { type: [String], required: true },
        correctAnswer: { type: String, required: true }
      }
    ]
});

const Quiz = mongoose.model('Quiz', quizSchema);
module.exports = {Quiz};
