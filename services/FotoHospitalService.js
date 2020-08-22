const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const multer = require('multer');

const {urlConfig} = require('../config/urlConfig');

const {storage,fileFilter} = require('../config/multerConfig');
const FotoMedicosModel = require('../models/FotoMedicoModel');


const fotomedicos = new FotoMedicosModel();


const upload = multer({storage:storage,fileFilter}).single('img');

exports.store = async(req,res)=>{
    return upload(req,res,async (err)=>{
        if(err){
            return res.status(400).json({
                errors: [err.code],
            });
        }

        const url = urlConfig();
      

        const {originalname,filename} = req.file;
        const  {_id} = req.body;

        const lancamento = new FotoMedicosModel({
                originalname:originalname,
                filename:filename,
                medico_id:_id,
                _url:`${url}/images/${filename}`,
                hospital_id: req.userhospitalid,
        });

        try{
            console.log('teste');
            const foto = await lancamento.save();
            console.log(foto);
    
            res.json(foto);
        }catch(e){
            res.status(500).send(e);
        }
        
    });
}

exports.findAll = async(req,res)=>{
    try{
        const data = await FotoMedicosModel.find();
        res.send(data);
    }catch(e){
        res.status(500).send(e);
    }
}


exports.findOne = async(req,res)=>{
    try{
        const id = req.params.id;

        const data = await FotoMedicosModel.findById({_id:id});
        res.send(data);
    }catch(e){
        res.status(500).send(e);
    }
}

exports.remove = async(req,res)=>{
    const id = req.userhospitalid;
    try{
        const data = await FotoMedicosModel.findByIdAndDelete({hospital_id:id});
        res.send(data);
    }catch(e){
        res.status(500).send(e);
    }
}