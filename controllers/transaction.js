const Transc=require('../models/Transc')
const db=require('../database/mongo')

const getAllTransc = async (req, res) => {
    try {
        const truncs = await Transc.find({}).lean();
        return res.render('projectClient', { layout: false, truncs: truncs });
    } catch (e) {
        res.json({ msg: e });
    }
}
const createTransc = async (req, res) => {
    try {
        const { project, developer, client, status } = req.body;
        const newTransc = new Transc({project, developer, client, status });
        await newTransc.save();
        return res.json(newTransc);
    } catch (e) {
        return res.json({ msg: e });
    }
}

const getOneTransc=async(req,res)=>{
    try{
        const TranscId=req.params.id;
        const SingTransc= await Transc.findById(TranscId)
        if(!SingTransc){
            return res.status(404).send("transction not found")
        }
        return res.json(SingTransc)
    }
   catch(e){
    res.json({msg:e})}
}



const updatTransc=async(req,res)=>{
    try{
    const {trunscId}=req.params.id
   const trunc= await Transc.findOneAndUpdate({trunscId},{name:"software",number:23},{new:true,runValidators:true})
    
  if (!trunc) {
    return res.send("not task to updat")
  }
  return res.render('editproject',)

}
catch(e){
    res.json({msg:e})
}
}



const deleteTransc=async(req,res)=>{
    try{
        const TrunscId=req.params.id;
        await Transc.findByIdAndDelete(TrunscId)
        return res.json({msg:"task deleted successfuly"})
    
    }
    catch(e){ res.json({msg:e})}


}
module.exports={createTransc,getAllTransc,updatTransc,deleteTransc,getOneTransc}