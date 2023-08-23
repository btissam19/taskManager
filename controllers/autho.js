const User = require('../models/User')
const Contact= require('../models/Contac')
const db=require('../database/mongo')
loginController = async (req, res) => {
    if (req.method === "GET") {
        return res.render('login');
    } else if (req.method === "POST") {
        const data = {
            email: req.body.email,
            password: req.body.password
        };

        try {
            const checking = await User.findOne({ email: req.body.email });

            if (checking && checking.password === data.password) {
                return res.status(201).render("home");
            } else {
                return res.render('sing');
            }
        } catch (error) {
            console.error(error);
            return res.send("something went wrong");
        }
    }
};

singupController = async (req, res) => {
    if (req.method === "GET") {
        return res.render('sing');
    } else if (req.method === "POST") {
        console.log(req.body);
        const data = {
            email: req.body.email,
            password: req.body.password
        };

        const checking = await User.findOne({ email: req.body.email });

        try {
            if (checking && checking.email === data.email && checking.password === data.password) {
                return res.send("user details already exist");
            } else {
                await User.insertMany([data]);
                return res.status(201).render("login");
            }
        } catch(e) {
            console.log(e);
            return res.send("wrong input");
        }
    }
};

contactUs= async (req,res)=>{
    const data={
        name:req.body.name,
        phone:req.body.phone,
        email:req.body.email,
        message:req.body.message
    }

    
    try{
        await Contact.insertMany([data])
        return res.send('thanks for your message')
        
    }
    catch(e){
        console.log(e)
        return res.send('OOOOOPPPPS')
    }
        

}


module.exports={loginController,singupController,contactUs}



