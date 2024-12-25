const express = require('express');
const router = express.Router();
const { createCourse, getAllCourses, getCourseById, updateCourse, deleteCourse } = require('../controllers/courseController');

/**
 * @swagger
 * tags:
 *   - name: Courses
 *     description: Operations related to courses
 * /api/courses:
 *   post:
 *     summary: Create a course
 *     description: Create a new course.
 *     tags:
 *       - Courses
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               courseId:
 *                 type: string
 *                 description: Unique identifier for the course
 *               category:
 *                 type: string
 *                 description: Category of the course (e.g., Web Development, Data Science)
 *               chapters:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       description: Unique identifier for the chapter
 *                     title:
 *                       type: string
 *                       description: Title of the chapter
 *                     content:
 *                       type: string
 *                       description: Content or details of the chapter
 *                     description:
 *                       type: string
 *                       description: A short description of the chapter
 *                     videoLink:
 *                       type: string
 *                       description: Link to a video resource for the chapter
 *                     duration:
 *                       type: number
 *                       description: Duration of the chapter in minutes
 *               description:
 *                 type: string
 *                 description: A brief description of the course
 *               duration:
 *                 type: number
 *                 description: Total duration of the course in hours
 *               instructorName:
 *                 type: string
 *                 description: Name of the course instructor
 *               language:
 *                 type: string
 *                 description: Language in which the course is taught
 *               level:
 *                 type: string
 *                 description: Skill level required for the course (e.g., Beginner, Intermediate, Advanced)
 *               price:
 *                 type: number
 *                 description: Price of the course in USD
 *               status:
 *                 type: string
 *                 description: Status of the course (e.g., Active, Inactive)
 *               visibility:
 *                 type: string
 *                 description: Visibility of the course (e.g., Public, Private)
 *     responses:
 *       201:
 *         description: Course created successfully
 *       500:
 *         description: Internal server error
 */
router.post('/api/courses', createCourse);

/**
 * @swagger
 * tags:
 *   - name: Courses
 *     description: Operations related to courses
 * /api/courses:
 *   get:
 *     summary: Get all courses
 *     description: Retrieve a list of all courses.
 *     tags:
 *       - Courses
 *     responses:
 *       200:
 *         description: A list of courses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   courseId:
 *                     type: string
 *                   category:
 *                     type: string
 *                   description:
 *                     type: string
 *                   instructorName:
 *                     type: string
 *                   language:
 *                     type: string
 *                   level:
 *                     type: string
 *                   price:
 *                     type: number
 *       500:
 *         description: Internal server error
 */
router.get('/api/courses', getAllCourses);

/**
 * @swagger
 * tags:
 *   - name: Courses
 *     description: Operations related to courses
 * /api/courses/{id}:
 *   get:
 *     summary: Get a specific course
 *     description: Retrieve a course by its ID.
 *     tags:
 *       - Courses
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the course to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A course object
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 courseId:
 *                   type: string
 *                 category:
 *                   type: string
 *                 description:
 *                   type: string
 *                 instructorName:
 *                   type: string
 *                 language:
 *                   type: string
 *                 level:
 *                   type: string
 *                 price:
 *                   type: number
 *                 chapters:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         description: Unique identifier for the chapter
 *                       title:
 *                         type: string
 *                         description: Title of the chapter
 *                       content:
 *                         type: string
 *                         description: Content or details of the chapter
 *                       description:
 *                         type: string
 *                         description: A short description of the chapter
 *                       videoLink:
 *                         type: string
 *                         description: Link to a video resource for the chapter
 *                       duration:
 *                         type: number
 *                         description: Duration of the chapter in minutes
 *       404:
 *         description: Course not found
 *       500:
 *         description: Internal server error
 */
router.get('/api/courses/:id', getCourseById);

/**
 * @swagger
 * tags:
 *   - name: Courses
 *     description: Operations related to courses
 * /api/courses/{id}:
 *   put:
 *     summary: Update a course
 *     description: Update the details of an existing course.
 *     tags:
 *       - Courses
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the course to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               courseId:
 *                 type: string
 *               category:
 *                 type: string
 *               description:
 *                 type: string
 *               duration:
 *                 type: number
 *               instructorName:
 *                 type: string
 *               language:
 *                 type: string
 *               level:
 *                 type: string
 *               price:
 *                 type: number
 *               status:
 *                 type: string
 *               visibility:
 *                 type: string
 *               chapters:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       description: Unique identifier for the chapter
 *                     title:
 *                       type: string
 *                       description: Title of the chapter
 *                     content:
 *                       type: string
 *                       description: Content or details of the chapter
 *                     description:
 *                       type: string
 *                       description: A short description of the chapter
 *                     videoLink:
 *                       type: string
 *                       description: Link to a video resource for the chapter
 *                     duration:
 *                       type: number
 *                       description: Duration of the chapter in minutes
 *     responses:
 *       200:
 *         description: Course updated successfully
 *       404:
 *         description: Course not found
 *       500:
 *         description: Internal server error
 */
router.put('/api/courses/:id', updateCourse);

/**
 * @swagger
 * tags:
 *   - name: Courses
 *     description: Operations related to courses
 * /api/courses/{id}:
 *   delete:
 *     summary: Delete a course
 *     description: Delete a course by its ID.
 *     tags:
 *       - Courses
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the course to delete
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Course deleted successfully
 *       404:
 *         description: Course not found
 *       500:
 *         description: Internal server error
 */
router.delete('/api/courses/:id', deleteCourse);

module.exports = router;
