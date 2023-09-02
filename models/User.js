
const mongoose = require('mongoose'); 

const userSingSchema=new mongoose.Schema({ 

    email:{
        type:String,
        required:[true,"you have to put email"]

    },
    password: {
        type: String,
        required: true
    }
});

module.exports=mongoose.model('UserSing',userSingSchema)
