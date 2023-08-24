const express=require('express')
const tasksRoute=express.Router();
const auth=require('../controllers/task')
tasksRoute.route('/').get(auth.tasks).post(auth.tasks)
module.exports=tasksRoute

