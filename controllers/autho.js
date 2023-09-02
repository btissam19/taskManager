const User = require('../models/User')
const Task=require("../models/Task") 
const Truncs=require("../models/Transc")                                 
const db=require('../database/mongo')
loginController = async (req, res) => {
    if (req.method === "GET") {
        return res.render('login',{ layout: false });
    } else if (req.method === "POST") {
        const data = {
            email: req.body.email,
            password: req.body.password
        };

        try {
            const checking = await User.findOne({ email: req.body.email });

            if (checking && checking.password === data.password) {
                const tasks = await Task.find({}).lean();
                const truncs=await Truncs.find({}).lean();
                res.render('layouts/dashboard', { layout: false, tasks: tasks, truncs: truncs });

            } else {
                return res.render('sing',{ layout: false, msg1: 'Register here!' });
            }
        } catch (error) {
            return error
        }
    }
};

singupController = async (req, res) => {
    if (req.method === "GET") {
        return res.render('sing',{ layout: false });
        
    } else if (req.method === "POST") {
        console.log(req.body);
        const data = {
            email: req.body.email,
            password: req.body.password
        };

        const checking = await User.findOne({ email: req.body.email });

        try {
            if (checking && checking.email === data.email && checking.password === data.password) {
                return res.render('sing',{ layout: false, msg: 'User already exists in the database!' })
            } else {
                await User.insertMany([data]);
                return res.status(201).render("login",{ layout: false });
            }
        } catch(e) {
            return e;
        }
    }
};
module.exports={loginController,singupController}



