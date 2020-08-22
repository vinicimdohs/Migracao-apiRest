const express = require('express');
const fotoPacienteRouter = express.Router();

const {autenticacao} = require('../middlewares/loginPacienteRequired');
const {store,findAll,findOne,remove} = require('../services/FotoPacienteService');
//const upload = multer(multerConfig);

//um foto só pode ser postada por um paciente logado
fotoPacienteRouter.post('/',autenticacao,store);

fotoPacienteRouter.get('/',findAll);
fotoPacienteRouter.get('/:id',findOne);

//uma foto só pode ser removida por um paciente logado
fotoPacienteRouter.delete('/',autenticacao,remove);

module.exports = fotoPacienteRouter;