const express = require('express');
const pacienteRouter = express.Router();
const {create, findAll, findOne, update,remove} = require('../services/pacienteService.js');
const {autenticacao} = require('../middlewares/loginPacienteRequired');

pacienteRouter.post('/',create);
pacienteRouter.get('/',autenticacao,findAll);
pacienteRouter.get('/:id',autenticacao,findOne);
pacienteRouter.put('/:id',autenticacao,update);
pacienteRouter.delete('/:id',autenticacao,remove);

module.exports = pacienteRouter;