const express = require('express')
const routes = express.Router()
const studentController = require('../controllers/studentController')

routes.post('/addStudent', studentController.addStudent)

module.exports = routes