const express=require('express')
const singup=express.Router()
const auth=require('../controllers/autho')
singup.route('/').get(auth.singupController).post(auth.singupController)

module.exports=singup
