const express = require('express')
const routes = express.Router()
const studentController = require('../controllers/studentController')

routes.post('/addStudent', studentController.addStudent)
routes.get('/getAllStudents',studentController.getStudents)
routes.get('/getStudent/:id',studentController.getStudent)

module.exports = routes