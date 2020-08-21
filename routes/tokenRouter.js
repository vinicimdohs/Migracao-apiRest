const express = require('express');
const tokenRouter = express.Router();
const {store} = require('../services/tokenHospitalService');
const {storePaciente} = require('../services/tokenPacienteService');


tokenRouter.post('/loginHospital',store);
tokenRouter.post('/loginPaciente',storePaciente);

 module.exports = tokenRouter;