const express = require('express');
const router = express.Router();
const { createQuiz, getQuizzesForCourse, getQuizById, updateQuiz, deleteQuiz, checkAnswer } = require('../controllers/quizController');

/**
 * @swagger
 * tags:
 *   - name: Quizzes
 *     description: Operations related to quizzes
 * /api/courses/{courseId}/quizzes:
 *   post:
 *     summary: Create a quiz for a course
 *     description: Create a quiz associated with a specific course.
 *     tags:
 *       - Quizzes
 *     parameters:
 *       - in: path
 *         name: courseId
 *         required: true
 *         description: ID of the course to associate the quiz with
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               quizid:
 *                 type: string
 *                 description: Unique identifier for the quiz
 *               courseId:
 *                 type: string
 *                 description: ID of the associated course
 *               questions:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       description: Unique identifier for the question
 *                     question:
 *                       type: string
 *                       description: The question text
 *                     options:
 *                       type: array
 *                       items:
 *                         type: string
 *                       description: List of answer options
 *                     correctAnswer:
 *                       type: string
 *                       description: The correct answer from the options
 *     responses:
 *       201:
 *         description: Quiz created successfully
 *       404:
 *         description: Course not found
 *       500:
 *         description: Internal server error
 */
router.post('/api/courses/:courseId/quizzes', createQuiz);

/**
 * @swagger
 * tags:
 *   - name: Quizzes
 *     description: Operations related to quizzes
 * /api/courses/{courseId}/quizzes:
 *   get:
 *     summary: Get all quizzes for a course
 *     description: Retrieve a list of all quizzes for a specific course.
 *     tags:
 *       - Quizzes
 *     parameters:
 *       - in: path
 *         name: courseId
 *         required: true
 *         description: ID of the course to get quizzes for
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of quizzes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   quizid:
 *                     type: string
 *                     description: Unique identifier for the quiz
 *                   courseId:
 *                     type: string
 *                     description: ID of the associated course
 *                   questions:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: string
 *                           description: Unique identifier for the question
 *                         question:
 *                           type: string
 *                           description: The question text
 *                         options:
 *                           type: array
 *                           items:
 *                             type: string
 *                           description: List of answer options
 *                         correctAnswer:
 *                           type: string
 *                           description: The correct answer from the options
 *       404:
 *         description: Course not found
 *       500:
 *         description: Internal server error
 */
router.get('/api/courses/:courseId/quizzes', getQuizzesForCourse);

/**
 * @swagger
 * tags:
 *   - name: Quizzes
 *     description: Operations related to quizzes
 * /api/quizzes/{id}:
 *   get:
 *     summary: Get a specific quiz by ID
 *     description: Retrieve details of a quiz by its ID.
 *     tags:
 *       - Quizzes
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the quiz to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A quiz object
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 quizid:
 *                   type: string
 *                   description: Unique identifier for the quiz
 *                 courseId:
 *                   type: string
 *                   description: ID of the associated course
 *                 questions:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         description: Unique identifier for the question
 *                       question:
 *                         type: string
 *                         description: The question text
 *                       options:
 *                         type: array
 *                         items:
 *                           type: string
 *                         description: List of answer options
 *                       correctAnswer:
 *                         type: string
 *                         description: The correct answer from the options
 *       404:
 *         description: Quiz not found
 *       500:
 *         description: Internal server error
 */
router.get('/api/quizzes/:quizId', getQuizById);

/**
 * @swagger
 * tags:
 *   - name: Quizzes
 *     description: Operations related to quizzes
 * /api/quizzes/{id}:
 *   put:
 *     summary: Update a quiz
 *     description: Update the details of a quiz by ID.
 *     tags:
 *       - Quizzes
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the quiz to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               questions:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       description: Unique identifier for the question
 *                     question:
 *                       type: string
 *                       description: The question text
 *                     options:
 *                       type: array
 *                       items:
 *                         type: string
 *                       description: List of answer options
 *                     correctAnswer:
 *                       type: string
 *                       description: The correct answer from the options
 *     responses:
 *       200:
 *         description: Quiz updated successfully
 *       404:
 *         description: Quiz not found
 *       500:
 *         description: Internal server error
 */
router.put('/api/quizzes/:id', updateQuiz);

/**
 * @swagger
 * tags:
 *   - name: Quizzes
 *     description: Operations related to quizzes
 * /api/quizzes/{id}:
 *   delete:
 *     summary: Delete a quiz by ID
 *     description: Delete a quiz by its ID.
 *     tags:
 *       - Quizzes
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the quiz to delete
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Quiz deleted successfully
 *       404:
 *         description: Quiz not found
 *       500:
 *         description: Internal server error
 */
router.delete('/api/quizzes/:quizId', deleteQuiz);

/**
 * @swagger
 * tags:
 *   - name: Quizzes
 *     description: Operations related to quizzes
 * 
 * /api/quizzes/{quizId}/check-answer:
 *   get:
 *     summary: Check the answer for a specific question in a quiz
 *     description: Verifies whether the provided answer for a question in the quiz is correct.
 *     tags:
 *       - Quizzes
 *     parameters:
 *       - in: path
 *         name: quizId
 *         required: true
 *         description: ID of the quiz
 *         schema:
 *           type: string
 *       - in: query
 *         name: questionId
 *         required: true
 *         description: The ID of the question in the quiz.
 *         schema:
 *           type: string
 *       - in: query
 *         name: answer
 *         required: true
 *         description: The answer provided by the user for the question.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Answer is correct or incorrect
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Correct answer" 
 *       404:
 *         description: Quiz or question not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Quiz not found"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Error message"
 * 
 * /api/quizzes/{quizId}:
 *   get:
 *     summary: Get a specific quiz by ID
 *     description: Retrieves the details of a specific quiz using the quiz ID.
 *     tags:
 *       - Quizzes
 *     parameters:
 *       - in: path
 *         name: quizId
 *         required: true
 *         description: ID of the quiz to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Quiz details retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "609e6be9dff96b001fd020de"
 *                 courseId:
 *                   type: string
 *                   example: "12345"
 *                 questions:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: "123"
 *                       question:
 *                         type: string
 *                         example: "What is the capital of France?"
 *                       options:
 *                         type: array
 *                         items:
 *                           type: string
 *                           example: "Paris"
 *                       correctAnswer:
 *                         type: string
 *                         example: "Paris"
 *       404:
 *         description: Quiz not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Quiz not found"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Error message"
 */

router.get('/api/quizzes/:quizId/check-answer', checkAnswer);

module.exports = router;
