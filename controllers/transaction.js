const Transc=require('../models/Transc')
const db=require('../database/mongo')

const getAllTransc = async (req, res) => {
    try {
        const truncs = await Transc.find({}).lean();
        console.log(truncs)
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
        console.log(newTransc)
        return res.json(newTransc);
    } catch (e) {
        return res.json({ msg: e });
    }
}

const getOneTransc=async(req,res)=>{
    try{
        const TranscId=req.params.id;
        const truncs= await Transc.findById(TranscId).lean()
        if(!truncs){
            return res.status(404).send("transction not found")
        }
        return res.render('editProject',{truncs:truncs,layout:false})
    }
   catch(e){
    res.json({msg:e})}
}

const updatTransc =async (req, res) => {
    const allowedUpdates = ['project', 'developer', 'client', 'status'];  
    const updates = Object.keys(req.body);  
    const isValidUpdate = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidUpdate) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const truncs = await Transc.findById(req.params.id); 

        if (!truncs) {
            return res.status(404).send({ error: 'Project not found' });
        }

        updates.forEach((update) => truncs[update] = req.body[update]);
        await truncs.save();

        res.json({ msg: 'Project updated successfully', data: truncs });
    } catch (e) {
        res.status(500).json({ msg: e.message });
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