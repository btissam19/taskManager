
const mongoose = require('mongoose');  // corrected spelling

const userSingSchema=new mongoose.Schema({   // It's more conventional to name this userSchema

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
