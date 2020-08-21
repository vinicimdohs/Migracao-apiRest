const mongoose = require('mongoose');



let schema = mongoose.Schema({
    nome:{type: String, required:true},
    rua:{type: String, required:true},
    bairro:{type: String, required:true},
    numero:{type: String, required:true},
    cep:{type: String, required:true},
    telefone:{type: String, required:true},
    eqDisponivel:{type: String, required:false},
    cnpj:{type: String, required:true},
    cidade:{type: String, required:true},
    estado:{type: String, required:true},
    email:{type: String, required:true , unique: true},
    //senha_hash:{type:String, required: true},
    senha:{type: String, virtuals:true},
    hospital_id:String,
});


const HospitalModel = mongoose.model('hospital',schema);


module.exports = HospitalModel;

