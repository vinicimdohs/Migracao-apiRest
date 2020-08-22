const mongoose = require('mongoose');

let schema = mongoose.Schema({
    originalname:{
        type: String, 
        required:true,
    },
    filename:{
        type: String, 
        required:true,
    },
    paciente_id:{
        type:String,
        required:true
    },
    _url: {
        type:String,
    }
});

const FotoPacientesModel = mongoose.model('fotos_pacientes',schema);

module.exports = FotoPacientesModel;