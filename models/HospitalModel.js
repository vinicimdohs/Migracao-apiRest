const mongoose = require('mongoose');

let validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

let schema = mongoose.Schema({
    nome:{type: String, required:true},
    rua:{type: String, required:true},
    bairro:{type: String, required:true},
    numero:{type: String, required:true},
    complemento:{type:String, required:false},
    cep:{type: String, required:true},
    telefone:{type: String, required:true},
    eqDisponivel:{type: String, required:false},
    cnpj:{type: String, required:true},
    cidade:{type: String, required:true},
    estado:{type: String, required:true},
    email:{ 
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    //senha_hash:{type:String, required: true},
    senha:{type: String, virtuals:true},
    hospital_id:String,
    covid:Boolean,
});


const HospitalModel = mongoose.model('hospitals',schema);


module.exports = HospitalModel;

