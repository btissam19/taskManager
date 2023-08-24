const Task=require("../models/Task")
const db=require('../database/mongo')
getAllTask= async (req,res)=>{
    try{
    const task =await Task.find({})
    res.json(task)}
    catch(e){
        res.json({msg:e})
    }

}
createNewTask=async (req,res)=>{
    const task = await Task.create({name:"latofamon",completed:true,latof:"babab"})
    res.send(task.name)

}

getSingleTask=async (req,res)=>{
    const {id:taskId}=req.params
    try{
    const task= await Task.findOne({_id:taskId})
    if(!task){
        return res.json({msg:`no one wit ${taskId}`})
    }
    res.json({task})}
    catch(e){
        res.json({msg:e})
    }

}

editTask=async(req,res)=>{
    const {id:taskId}=req.params
    try{
    const task= await Task.findByIdAndUpdate({_id:taskId},req.body)
    if(!task){
        return res.json({msg:`no one wit ${taskId}`})
    }
    res.json({task})}
    catch(e){
        res.json({msg:e})
    }
}
deleteTask=async (req,res)=>{
    const {id:taskId}=req.params
    try{
    const task= await Task.findByIdAndDelete({_id:taskId})
    if(!task){
        return res.json({msg:`no one wit ${taskId}`})
    }
    res.json({task})}
    catch(e){
        res.json({msg:e})
    }


}

module.exports={deleteTask,editTask,getSingleTask,createNewTask,getAllTask}