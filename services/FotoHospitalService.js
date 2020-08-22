const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const multer = require('multer');

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

        const {originalname,filename} = req.file;
        const  {_id} = req.body;
        console.log(originalname);

        const lancamento = new FotoMedicosModel({
                originalname:originalname,
                filename:filename,
                medico_id:_id
        });

        console.log(lancamento);

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