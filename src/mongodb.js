const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/manager")
    .then(() => {
        console.log("You are connected");
    })
    .catch((e) => {
        console.log("You failed to connect");
    });

const loginSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

const signUpSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

const Login = mongoose.model('Login', loginSchema);
const SignUp = mongoose.model('SignUp', signUpSchema);

module.exports = {
    Login,
    SignUp
};
