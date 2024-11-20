const express = require('express');
const courseController = require('../controllers/courseController');

const router = express.Router();

// Define routes for courses
router.post('/addCourse', courseController.addCourse);        // Add a new course
router.get('/getCourse/:id', courseController.getCourse);     // Get a single course by ID
router.get('/getAllCourses', courseController.getAllCourses); // Get all courses
router.patch('/updateCourse', courseController.updateCourse); // Update a course
router.delete('/deleteCourse', courseController.deleteCourse); // Delete a course

module.exports = router;