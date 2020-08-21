const express = require('express');
const pacienteRouter = express.Router();
const {create, findAll, findOne, update,remove} = require('../services/pacienteService.js');
const {autenticacao} = require('../middlewares/loginPacienteRequired');

//um paciente não lista outros pacientes
//para o sistema poder listar os pacientes
pacienteRouter.get('/',findAll);
pacienteRouter.get('/:id',findOne);

//um paciente não pode criar outro hospital
pacienteRouter.post('/',create);
//somente um paciente logado pode se alterar
//vai ser alterado pelo token
pacienteRouter.put('/',autenticacao,update);
//somente um paciente logado pode se deletar
//vai ser deletado pelo token
pacienteRouter.delete('/',autenticacao,remove);

module.exports = pacienteRouter;