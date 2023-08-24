const Task=require("../models/Task")
const db=require('../database/mongo')

tasks= async(req,res)=>{
    if(req.method === "GET"){
    return  res.render('task')
   }
   else if(req.method==="POST"){
     const data={ name:req.body.name}
     try{
        await Task.insertMany([data]);
         return res.send(req.body)}
     catch(e){console.log(e);
         return res.send("wrong things happend")
     }
 }

}
module.exports={tasks}