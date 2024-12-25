const {Quiz} = require('../models/quizModel');
const {Course} = require('../models/courseModel');

// Create a quiz for a course
const createQuiz = async (req, res) => {
  try {
    const { questions } = req.body;
    const ids = questions.map(q => q.id);
    const course = await Course.findOne({courseId:req.params.courseId})
    if(!course) return res.status(400).json({error: 'Course not found'});
    // Check if the ids are unique
    const uniqueIds = new Set(ids);
    if (uniqueIds.size !== ids.length) {
      return res.status(400).json({ error: 'Each question must have a unique id' });
    }

    const quiz = new Quiz(req.body);
    await quiz.save();
    res.status(201).json(quiz);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Get all quizzes for a course
const getQuizzesForCourse = async (req, res) => {
  try {
    // Find all quizzes related to the course using courseId
    const quizzes = await Quiz.find({ courseId: req.params.courseId });
    res.status(200).json(quizzes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a specific quiz
const getQuizById = async (req, res) => {
  try {
    // Find the quiz by quizId
    const quiz = await Quiz.findOne({ quizId: req.params.id });
    if (!quiz) return res.status(404).json({ error: 'Quiz not found' });
    res.status(200).json(quiz);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a quiz
const updateQuiz = async (req, res) => {
  try {
    // Update the quiz using quizId and return the updated quiz
    const quiz = await Quiz.findOneAndUpdate({ quizId: req.params.id }, req.body, { new: true });
    if (!quiz) return res.status(404).json({ error: 'Quiz not found' });
    res.status(200).json(quiz);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a quiz
const deleteQuiz = async (req, res) => {
  try {
    console.log(req.params.id);
    const quiz = await Quiz.findOneAndDelete({ quizid: req.params.quizId });
    if (!quiz) return res.status(404).json({ error: 'Quiz not found' });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Check the answer for a specific question in a quiz
const checkAnswer = async (req, res) => {
  try {
    const { quizId } = req.params;
    const { questionId, answer } = req.query; // Retrieving the query parameters

    // Fetch the quiz using the quizId
    const quiz = await Quiz.findOne({quizid: quizId});
    if (!quiz) return res.status(404).json({ error: 'Quiz not found' });

    // Find the question by questionId
    const question = quiz.questions.find(q => q.id === questionId);
    if (!question) return res.status(404).json({ error: 'Question not found' });

    // Check if the provided answer matches the correct answer
    if (question.correctAnswer === answer) {
      return res.status(200).json({ message: 'Correct answer' });
    } else {
      return res.status(200).json({ message: 'Incorrect answer' });
    }

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {createQuiz, getQuizzesForCourse, getQuizById, updateQuiz, deleteQuiz, checkAnswer};
