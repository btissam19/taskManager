///############ include important directory#####################
const express = require("express")
const app=express()
const path = require("path")
const hbs=require("hbs")
const LogInCollection = require("./mongodb")
const SingUpCollection=require("./mongodb")
const port = process.env.PORT || 3000
const tempelatePath = path.join(__dirname, '../tempelates')
const publicPath = path.join(__dirname, '../public')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'hbs')
app.set('views', tempelatePath)
app.use(express.static(publicPath))
//######################" create the get routers########################"
app.get('/',(req,res)=>{
    res.render('home')
})
app.get('/login',(req,res)=>{
    res.render('login')
})
app.get('/sing',(req,res)=>{
    res.render('sing')
})
app.get('/index',(req,res)=>{
    res.render('index')
})

//######################" create the post routers########################"
app.post('/singup', async (req,res)=>{
    const data = {
        name: req.body.name,
        password: req.body.password
    }
    const checking = await  LogInCollection.findOne({name:req.body.name})
    try{
        if(checking.name === req.body.name && checking.password===req.body.password){ res.send("user details already exists") }
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
})

app.post('/login', async (req, res) => {

    try {
        const check = await LogInCollection.findOne({ name: req.body.name })

        if (check.password === req.body.password) {
            res.status(201).render("home", { naming: `${req.body.password}+${req.body.name}` })
        }

        else {
            res.send("incorrect password")
        }


    } 
    
    catch (e) {

        res.send("wrong details")
        

    }


})
app.listen(port,connect=>{console.log(`you are connect in ${port}`)})
