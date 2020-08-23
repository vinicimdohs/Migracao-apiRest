const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;


const HospitalModel = require('../models/HospitalModel.js');
const { v4: uuidv4 } = require('uuid');

const hospital = new HospitalModel();

exports.create = async(req,res)=>{

    const lancamento = new HospitalModel({
        nome : req.body.nome,
        rua: req.body.rua,
        bairro: req.body.bairro,
        numero: req.body.numero,
        cep:req.body.cep,
        telefone:req.body.telefone,
        complemento: req.body.complemento,
        eqDisponivel: req.body.eqDisponivel,
        cnpj:req.body.cnpj,
        cidade:req.body.cidade,
        estado: req.body.estado,
        email:req.body.email,
        senha: req.body.senha,
       // senha_hash: Bcrypt.hashSync(req.body.senha),
        hospital_id:uuidv4(),
        covid: req.body.covid,
    })
    

    try{
        const data = await lancamento.save();

        res.send(data);
    }catch(e){
        res.status(500).send(e);
    }
}

exports.findAll = async(req,res)=>{
    try{
        const data = await HospitalModel.find();
        res.send(data);
    }catch(e){
        res.status(500).send(e); 
    }
}

exports.findOne = async(req,res)=>{
    try{
        const id = req.params.id;

        const data = await HospitalModel.findById({_id:id});
        res.send(data);
    }catch(e){
        res.status(500).send(e);
    }
}

exports.update = async(req,res)=>{
    const id = req.userid;
    try{
        let data = await HospitalModel.findOne({_id:id});

        if(!data){
            return res.status(400).json({
                errors:['Usuário não existe']
            });
        }

        const newData = await data.updateOne(req.body);

        data = await HospitalModel.findOne({_id:id});

        res.send(data);
    }catch(e){
        console.log(e);
        res.status(500).send(e);
    }
}

exports.remove = async(req,res)=>{
    const id = req.userid;
    try{
        const data = await HospitalModel.findByIdAndDelete({_id:id});
        res.send(data);
    }catch(e){
        res.status(500).send(e);
    }
}