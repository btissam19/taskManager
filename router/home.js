
const express = require('express');
const app = express();
const db =require('../models/User')
const hbs=require('hbs')
const path=require('path')
app.set('view engine', 'hbs');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, '../public')));
console.log(path.join(__dirname, '../public'))

const loginRouter = require('./login');   
const singupRouter = require('./singup'); 

app.use('/login', loginRouter);
app.use('/signup', singupRouter); 

const port = 3000;

app.get('/',(req, res) => {
        res.render('home');
    });

 
app.listen(port, () => {
          console.log(`Server is running at http://localhost:${port}`); });
      

