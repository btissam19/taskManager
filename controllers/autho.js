const LogInCollection = require('../database/mongo')
// const hbs=require('hbs')
// app.set('view engine', 'hbs');
loginController=(req,res)=>{
    if(req.method==="GET"){
    res.render('login')}
    else if(req.method==="POST"){
      res.render('home')
    }
    else{res.send("wrong route method")}
}
singupController=(req,res)=>{
    if(req.method==="GET"){
    res.render('sing')}
    else if(req.method==="POST"){
        async (req, res) => {
             const data = {
                name: req.body.name,
                password: req.body.password
            }
        
            const checking = await LogInCollection.findOne({ name: req.body.name })
        
           try{
            if (checking.name === req.body.name && checking.password===req.body.password) {
                res.send("user details already exists")
            }
            else{
                await LogInCollection.insertMany([data])
            }
           }
           catch{
            res.send("wrong inputs")
           }
        
            res.status(201).render("home", {
                naming: req.body.name
            })
        }
    }
    else{res.send("wrong route method")}
}

module.exports={loginController,singupController}
