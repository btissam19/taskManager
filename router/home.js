
const express = require('express');
const app = express();
// const hbs=require('hbs')

const exphbs = require('express-handlebars');
const path=require('path')
app.engine('hbs', exphbs.engine({
    extname: '.hbs',
    layoutsDir: path.join(__dirname, '../views') ,  // or whatever your default layout is
    partialsDir: 'views/partials'
   // path to your partials
}));
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
        res.render('home',{ layout: false }); // No layout will be used for anotherViewNam
    });
app.get('/transaction',(req, res) => {
        res.render('transaction',{ layout: false }); // No layout will be used for anotherViewNam
    });

app.listen(port, () => {
          console.log(`Server is running at http://localhost:${port}`); });
      

