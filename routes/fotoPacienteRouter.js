const express = require('express');
const fotoPacienteRouter = express.Router();

const {autenticacao} = require('../middlewares/loginPacienteRequired');
const {store,findAll} = require('../services/FotoPacienteService');
//const upload = multer(multerConfig);

fotoPacienteRouter.post('/',autenticacao,store);
fotoPacienteRouter.get('/',findAll);

module.exports = fotoPacienteRouter;