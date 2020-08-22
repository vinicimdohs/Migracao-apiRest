const mongoose = require('mongoose');

let schema = mongoose.Schema({
    originalname:{
        type: String, 
        required:false,
    },
    filename:{
        type: String, 
        required:false,
    },
    medico_id:{
        type:String,
        required:false
    },
    _url:{
        type:String,
    },
    hospital_id:{
        type:String
    }
});

const FotoMedicosModel = mongoose.model('fotos_medicos',schema);

module.exports = FotoMedicosModel;