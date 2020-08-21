const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const MedicoHospitalModel = require('../models/MedicoHospitalModel.js');



const medicohospital = new MedicoHospitalModel();

exports.create = async(req,res)=>{
    const lancamento = new MedicoHospitalModel({
        nome: req.body.nome,
        especializacao:req.body.especializacao,
        descricao:req.body.descricao,
        hospital_id:req.body.hospital_id,
        medico_on:req.body.medico_on
    });
    try{
        const data = await lancamento.save();

        res.send(data);
    }catch(e){
        res.status(500).send(e);
    }
}

exports.findAll = async(req,res)=>{
    try{
        const data = await MedicoHospitalModel.find();
        res.send(data);
    }catch(e){
        res.status(500).send(e);
    }
}

exports.findOne = async(req,res)=>{
    try{
        const id = req.params.id;

        const data = await MedicoHospitalModel.findById({_id:id});
        res.send(data);
    }catch(e){
        res.status(500).send(e);
    }
}

exports.update = async(req,res)=>{
    const id = req.params.id;

    try{
        const data = await MedicoHospitalModel.findOneAndUpdate(
            {_id:id},
            req.body,
            {new:true}
            );
        res.send(data);
    }catch(e){
        res.status(500).send(e);
    }
}

exports.remove = async(req,res)=>{
    const id = req.params.id;
    try{
        const data = await MedicoHospitalModel.findByIdAndDelete({_id:id});
        res.send(data);
    }catch(e){
        res.status(500).send(e);
    }
}