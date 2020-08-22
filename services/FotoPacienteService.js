const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const multer = require('multer');

const {urlConfig} = require('../config/urlConfig');

const {storage,fileFilter} = require('../config/multerConfig');
const FotoPacienteModel  = require('../models/FotoPacienteModel');


const fotopaciente = new FotoPacienteModel();


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
        

        const lancamento = new FotoPacienteModel({
                originalname:originalname,
                filename:filename,
                paciente_id:_id,
                _url:`${url}/images/${filename}`
        });

        

        try{
            console.log('teste');
            const foto = await lancamento.save();
    
            res.json(foto);
        }catch(e){
            res.status(500).send(e);
        }
    });
}

exports.findAll = async(req,res)=>{
    try{
        const data = await FotoPacienteModel.find();
        res.send(data);
    }catch(e){
        res.status(500).send(e);
    }
}


exports.findOne = async(req,res)=>{
    try{
        const id = req.params.id;

        const data = await FotoPacienteModel.findById({_id:id});
        res.send(data);
    }catch(e){
        res.status(500).send(e);
    }
}

exports.remove = async(req,res)=>{
    const id = req.userid;
    try{
        const data = await FotoPacienteModel.findByIdAndDelete({paciente_id:id});
        res.send(data);
    }catch(e){
        res.status(500).send(e);
    }
}