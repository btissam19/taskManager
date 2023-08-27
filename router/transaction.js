const express = require('express')
const transc=express.Router()
const {createTransc,getAllTransc,updatTransc,deleteTransc,getOneTransc}=require('../controllers/transaction')
transc.route('/').get(getAllTransc).post(createTransc)
transc.route('/:id').patch(updatTransc).delete(deleteTransc).get(getOneTransc)
module.exports=transc