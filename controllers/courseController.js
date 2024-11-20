const db = require('../models/indexStart');  // Import database connection
const createError = require('http-error');   // For creating error responses

// We are using the Course model
const Course = db.courses;  // Assuming you've defined the 'Course' model similarly to the 'Student' model

// Add a new course
module.exports = {
    addCourse: async (req, res, next) => {
        try {
            const info = {
                name: req.body.name,
                description: req.body.description,
                credits: req.body.credits,
            };
            const addCourse = await Course.create(info);
            res.status(200).send(addCourse);  // Send the created course back in the response
        } catch (error) {
            next(error);  // If there's an error, pass it to the error handler
        }
    },

    // Get all courses
    getAllCourses: async (req, res, next) => {
        try {
            const courses = await Course.findAll();  // Get all courses from the database
            res.status(200).send(courses);  // Send the list of courses back
        } catch (error) {
            next(error);  // If there's an error, pass it to the error handler
        }
    },

    // Get a single course by ID
    getCourse: async (req, res, next) => {
        try {
            const id = req.params.id;  // Get the course ID from the URL parameter
            const course = await Course.findOne({ where: { course_id: id } });  // Find the course by ID
            if (!course) {
                throw createError(404, 'Course does not exist');  // If course doesn't exist, throw an error
            }
            res.status(200).send(course);  // Send the course back in the response
        } catch (error) {
            next(error);  // If there's an error, pass it to the error handler
        }
    },

    // Update a course
    updateCourse: async (req, res, next) => {
        try {
            const id = req.params.id;  // Get the course ID from the URL parameter
            const [updated] = await Course.update(req.body, { where: { course_id: id } });  // Update the course
            if (updated) {
                res.status(200).send('Course updated successfully');  // Send a success message
            } else {
                throw createError(404, 'Course not found');  // If no course was updated, throw an error
            }
        } catch (error) {
            next(error);  // If there's an error, pass it to the error handler
        }
    },

    // Delete a course
    deleteCourse: async (req, res, next) => {
        try {
            const id = req.params.id;  // Get the course ID from the URL parameter
            const deleted = await Course.destroy({ where: { course_id: id } });  // Delete the course by ID
            if (deleted) {
                res.status(200).send('Course deleted successfully');  // Send a success message
            } else {
                throw createError(404, 'Course not found');  // If no course was deleted, throw an error
            }
        } catch (error) {
            next(error);  // If there's an error, pass it to the error handler
        }
    }
};