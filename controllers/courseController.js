const { Course } = require('../models/courseModel');

const createCourse = async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.status(201).json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all courses
const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a specific course by courseId
const getCourseById = async (req, res) => {
  try {
    const course = await Course.findOne({ courseId: req.params.id });
    if (!course) return res.status(404).json({ error: 'Course not found' });
    res.status(200).json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a course by courseId
const updateCourse = async (req, res) => {
  try {
    const course = await Course.findOneAndUpdate(
      { courseId: req.params.id },
      req.body,
      { new: true }
    );
    if (!course) return res.status(404).json({ error: 'Course not found' });
    res.status(200).json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a course by courseId
const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findOneAndDelete({ courseId: req.params.id });
    if (!course) return res.status(404).json({ error: 'Course not found' });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createCourse, getAllCourses, getCourseById, updateCourse, deleteCourse };
