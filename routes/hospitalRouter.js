const express = require('express');
const hospitalRouter = express.Router();
const {create, findAll, findOne, update,remove} = require('../services/hospitalService.js');
const {autenticacao} = require('../middlewares/loginRequired.js');


hospitalRouter.post('/',create);
hospitalRouter.get('/',autenticacao,findAll);
hospitalRouter.get('/:id',autenticacao,findOne);
hospitalRouter.put('/:id',autenticacao,update);
hospitalRouter.delete('/:id',autenticacao,remove);

module.exports = hospitalRouter;