const express = require('express');
const medicoHospitalRouter = express.Router();
const {create, findAll, findOne, update,remove} = require('../services/medicoHospitalService.js');
const {autenticacao} = require('../middlewares/loginRequired.js');

medicoHospitalRouter.post('/',autenticacao,create);
medicoHospitalRouter.get('/',findAll);//aberto
medicoHospitalRouter.get('/:id',findOne);//aberto
medicoHospitalRouter.put('/:id',autenticacao,update);
medicoHospitalRouter.delete('/:id',autenticacao,remove);

module.exports = medicoHospitalRouter;