const mongoose = require('mongoose');

let validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

let schema = mongoose.Schema({
    nome:String,
    sobrenome:String,
    rua:String,
    bairro:String,
    numero:String,
    complemento:{type:String, required:false},
    cep:String,
    cidade:String,
    estado:String,
    celular:String,
    email:{ 
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    senha:String,
})

const PacienteModel = mongoose.model('paciente',schema);

module.exports = PacienteModel;