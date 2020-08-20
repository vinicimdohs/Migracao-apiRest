const mongoose = require('mongoose');

let schema = mongoose.Schema({
    nome:String,
    rua:String,
    bairro:String,
    numero:String,
    cep:String,
    telefone:String,
    eqDisponivel:String,
    cnpj:String,
    cidade:String,
    estado:String,
    email:String,
    senha:String,
    hospital_id:String,
});

const HospitalModel = mongoose.model('hospital',schema);

module.exports = HospitalModel;

