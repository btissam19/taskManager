const express=require('express')
const contactUs=express.Router()
const auth=require('../controllers/autho')
contactUs.route('/').post(auth.contactUs)
module.exports=contactUs