const express=require('express')
const tasksRoute=express.Router();
const {deleteTask,editTask,getSingleTask,createNewTask,getAllTask}=require('../controllers/task')
tasksRoute.route('/').get(getAllTask).post(createNewTask)
tasksRoute.route('/:id').get(getSingleTask).patch(editTask).delete(deleteTask)
module.exports=tasksRoute

