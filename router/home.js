
const express = require('express');
const app = express();
const hbs=require('hbs')
const path=require('path')
app.set('view engine', 'hbs');
const bodyParser = require('body-parser');
require('axios')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));
console.log(path.join(__dirname, '../public'))
const loginRouter = require('./login');   
const singupRouter = require('./singup'); 
const contacUSroute=require('./contacUs')
const taskrouter=require('./task')
app.use('/task',taskrouter)
app.use('/login', loginRouter);
app.use('/singup', singupRouter); 
app.use('/contact',contacUSroute)

const port = 3000;


app.get('/',(req, res) => {
        res.render('home');
    });
app.get('/dashboard',(req, res) => {
      res.render('dashboard');
  });

//  app.get('/addtask',(req,res)=>{
//     res.render('taksindex.hbs');
// })
// app.get('/edittask',(req,res)=>{
//     res.render('task');
// })
app.listen(port, () => {
          console.log(`Server is running at http://localhost:${port}`); });
      

