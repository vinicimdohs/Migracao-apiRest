const mongoose = require('mongoose');

let schema = mongoose.Schema({
    nome:String,
    especializacao:String,
    hospital_id:{type:String , required:true},
    medico_on:{type:Boolean , default: false},
});

const MedicoHospitalModel = mongoose.model('medico_hospitals',schema);

module.exports = MedicoHospitalModel;