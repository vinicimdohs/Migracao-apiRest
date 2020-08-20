const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const PacienteModel = require('../models/PacienteModel.js');



const paciente = new PacienteModel();

exports.create = async(req,res)=>{
    const lancamento = new PacienteModel({
        nome:req.body.nome ,
        sobrenome:req.body.sobrenome ,
        rua:req.body.rua ,
        bairro:req.body.bairro ,
        numero:req.body.numero ,
        cep:req.body.cep ,
        cidade:req.body.cidade ,
        estado:req.body.estado ,
        celular:req.body.celular ,
        email:req.body.email ,
        senha:req.body.senha,
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
        const data = await PacienteModel.find();
        res.send(data);
    }catch(e){
        res.status(500).send(e);
    }
}

exports.findOne = async(req,res)=>{
    try{
        const id = req.params.id;

        const data = await PacienteModel.findById({_id:id});
        res.send(data);
    }catch(e){
        res.status(500).send(e);
    }
}

exports.update = async(req,res)=>{
    const id = req.params.id;
    try{
        const data = await PacienteModel.findOneAndUpdate(
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
        const data = await PacienteModel.findByIdAndDelete({_id:id});
        res.send(data);
    }catch(e){
        res.status(500).send(e);
    }
}