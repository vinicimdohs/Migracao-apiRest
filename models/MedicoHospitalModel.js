const mongoose = require('mongoose');

let schema = mongoose.Schema({
    nome:String,
    especializacao:String,
    hospital_id:String,
    medico_on:Boolean
});

const MedicoHospitalModel = mongoose.model('medico_hospital',schema);

module.exports = MedicoHospitalModel;