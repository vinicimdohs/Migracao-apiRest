const express = require('express');
const fotoPacienteRouter = express.Router();

const {autenticacao} = require('../middlewares/loginPacienteRequired');
const {store,findAll,findOne,remove} = require('../services/FotoPacienteService');
//const upload = multer(multerConfig);

fotoPacienteRouter.post('/',autenticacao,store);//paciente logado para criar a foto
fotoPacienteRouter.get('/',findAll);
fotoPacienteRouter.get('/:id',findOne);
fotoPacienteRouter.delete('/',autenticacao,remove);//paciente logado para excluir a foto

module.exports = fotoPacienteRouter;