const LogInCollection = require('../database/mongo')
// const hbs=require('hbs')
// app.set('view engine', 'hbs');
loginController=(req,res)=>{
    if(req.method==="GET"){
    res.render('login')}
    else if(req.method==="POST"){
         data ={name:"ibtissam",password:"2001"}
        //  newdata=r
       const newdata= new LogInCollection(data)
       newdata.save()
       res.json(data)
    }
    else{res.send("wrong route method")}
}
singupController=(req,res)=>{
    if(req.method==="GET"){
    res.render('sing')}
    else if(req.method==="POST"){
        res.send('hello from singup post requset')
    }
    else{res.send("wrong route method")}
}

module.exports={loginController,singupController}
