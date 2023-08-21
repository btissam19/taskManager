// // const mongose=require('mongose')
// // const User=mongose.Schema({
// //     name:{
// //         type:String,
// //         required:true,
// //     },
// //     email:{
// //         type:String,
// //         required:true,
// //     },
// //     password:{
// //         type:String,
// //         required:true
// //     }
// // })
// // module.exports=mongose.model('usercollection',User)
// const mongoose = require('mongoose');  // corrected spelling

// const userSchema = new mongoose.Schema({   // It's more conventional to name this userSchema
//     name: {
//         type: String,
//         required: true,
//     },
//     email: {
//         type: String,
//         required: true,
//     },
//     password: {
//         type: String,
//         required: true
//     }
// });

// module.exports = mongoose.model('User', userSchema);  // 'User' is more conventional than 'usercollection'
