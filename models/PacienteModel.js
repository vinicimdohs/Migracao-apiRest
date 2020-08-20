const mongoose = require('mongoose');

let schema = mongoose.Schema({
    nome:String,
    sobrenome:String,
    rua:String,
    bairro:String,
    numero:String,
    cep:String,
    cidade:String,
    estado:String,
    celular:String,
    email:String,
    senha:String,
})

const PacienteModel = mongoose.model('paciente',schema);

module.exports = PacienteModel;