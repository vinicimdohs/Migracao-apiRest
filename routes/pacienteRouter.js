const express = require('express');
const pacienteRouter = express.Router();
const {create, findAll, findOne, update,remove} = require('../services/pacienteService.js');

pacienteRouter.post('/',create);
pacienteRouter.get('/',findAll);
pacienteRouter.get('/:id',findOne);
pacienteRouter.put('/:id',update);
pacienteRouter.delete('/:id',remove);

module.exports = pacienteRouter;