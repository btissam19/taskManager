const User = require('../models/User')
const db=require('../database/mongo')
// const hbs=require('hbs')
// app.set('view engine', 'hbs');
loginController = async (req, res) => {
    if (req.method === "GET") {
        res.render('login');
    } else if (req.method === "POST") {
        const data = {
            name: req.body.name,
            password: req.body.password
        };

        try {
            const checking = await User.findOne({ name: req.body.name });

            // Since 'checking' is now a single document or null, we check its properties directly
            if (checking && checking.password === data.password) { // NOTE: Compare hashed passwords in a real scenario
                res.status(201).render("home", { naming: req.body.name });
            } else {
                res.render('sing');
            }
        } catch (error) {
            console.error(error); // Log the error for debugging
            res.send("something went wrong");
        }
    }
};



singupController = async (req, res) => {
    if (req.method === "GET") {
        res.render('sing');
    } else if (req.method === "POST") {
        const data = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        };

        const checking = await User.findOne({ email: req.body.email }); // Are you sure it should be 'name' and not 'email'?

        try {
            if (checking && checking.email === data.email && checking.password === data.password) {
                res.send("user details already exist");
            } else {
                await User.insertMany([data]);
                // res.render('home', { naming: `${req.body.password}+${req.body.name}` }); // Fixed this part for proper rendering
            }
        } catch {
            res.send("wrong input");
        }

        res.status(201).render("home",{naming:req.body.name})
    }
};


module.exports={loginController,singupController}
