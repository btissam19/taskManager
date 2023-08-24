
const Contact= require('../models/Contac')


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
module.exports={contactUs}
