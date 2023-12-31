const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path=require('path')
const Task=require("../models/Task") 
const Truncs=require("../models/Transc") 
const port = 3000;
const bodyParser = require('body-parser');
const loginRouter = require('./login');   
const singupRouter = require('./singup'); 
const taskrouter=require('./task')
const transcRoute=require('./transaction')
app.engine('hbs', exphbs.engine({
    extname: '.hbs',
    layoutsDir: path.join(__dirname, '../views') , 
    partialsDir: 'views/partials'
}));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/task',taskrouter)
app.use('/login', loginRouter);
app.use('/singup', singupRouter); 
app.use('/transaction',transcRoute)
app.get('/',(req, res) => {
        res.render('login',{ layout: false }); 
    });
app.get('/lougout',(req,res)=>{
    res.render('login',{ layout: false });
})
app.get('/project',(req, res) => {
        res.render('projectForms',{ layout: false });
    });
app.get('/dashboard',async(req,res)=>{
    const tasks = await Task.find({}).lean();
    const truncs=await Truncs.find({}).lean();
    res.render('layouts/dashboard', { layout: false, tasks: tasks, truncs: truncs });

}) 

app.listen(port, () => {
          console.log(`Server is running at http://localhost:${port}`); });
      
