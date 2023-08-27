const mongoose=require('mongoose')
const TranscSchema= new mongoose.Schema({
          name:{
            type:String,
            required:true
        },
        number:{
            type:Number,
            required:true
        },
        date:{
            type:Date,
            required:false
        }
})

module.exports=mongoose.model('transc',TranscSchema)