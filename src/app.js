///############ include important directory#####################
const express = require("express")
const app=express()
const home=require('../router/home')
app.use('/','home')

app.listen(port,connect=>{console.log(`you are connect in succusfully`)})
