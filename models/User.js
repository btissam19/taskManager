
const mongoose = require('mongoose');  // corrected spelling

const userLoginSchema = new mongoose.Schema({   // It's more conventional to name this userSchema
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
});


const userSingSchema=new mongoose.Schema({   // It's more conventional to name this userSchema
    name: {
        type: String,
        required: true,
    },
    email:{
        type:String,
        required:false

    },
    password: {
        type: String,
        required: true
    }
});

// module.exports = mongoose.model('UserLogin', userLoginSchema ), mongoose.model('UserSing',userSingSchema)
module.exports=mongoose.model('UserSing',userSingSchema)
