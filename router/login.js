const express=require('express')
const login=express.Router()
const auth=require('../controllers/autho')
login.route('/').get(auth.loginController).post(auth.loginController)
module.exports=login


