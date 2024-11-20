const db = require('../models/indexStart')
const creatError = require('http-errors')

const Student = db.students
const Course = db.courses

module.exports = {


    addStudent: async (req, res, next) => {
        try{
            let info = {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                gender: req.body.gender,
                course_id: req.body.course_id
            }
            const addStudent = await Student.create(info)
            res.status(200).send(addStudent)
        }
        catch(error){
            next(error)
        }
    },
    //get all students with course
    getStudents : async(req,res,next)=>{
        try{
            let allStudents = await Student.findAll({
                include:[{model: Course,attributes:['coursename']}]
            })
            res.status(200).send(allStudents)
        }catch(error) {
            next(error)
        }
    },

    //get student by id
    getStudent :async(req,res,next)=>{
        try{
            let id = req.params.student_id
            let student = await Student.findOne({where:{student_id: id}})

            if(!student){
                throw(createError(404,"student does not exist"))
            }
            res.status(200).send(studen)
        }catch(error){
            next(error)
        }
    },

    //update student
    updateStudent :async(req,res,next)=>{
        try {
            let id = req.params.id
            const student = await Student.update(req.body,{ where : {student_id: id}}) 
            if (!student){
                throw(createError(404,"student does not exist"))
            }
            res.status(200).send(student)
        }catch(error){
            next(error)
        }
    },

    //delete student
    deleteStudent :async(req,res,next)=>{
        try{
            let id = req.params.id
            const student = await Student.destroy({where:{student_id:id}})
            if(!student){
                throw(createError(404,"student does not exist"))
            }
            res.status(200).send(student)
        }catch(error){
            next(error)
        }
    }


}