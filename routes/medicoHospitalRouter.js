const express = require('express');
const medicoHospitalRouter = express.Router();
const {create, findAll, findOne, update,remove} = require('../services/medicoHospitalService.js');
const {autenticacao} = require('../middlewares/loginRequired.js');

//Um médico só pode ser criado, por um hospital logado
medicoHospitalRouter.post('/',autenticacao,create);

medicoHospitalRouter.get('/',findAll);//aberto
medicoHospitalRouter.get('/:id',findOne);//aberto

//um médico só pode ser editado por um hospital logado
medicoHospitalRouter.put('/:id',autenticacao,update);//ainda preciso do id, pois a autorização é do hospital e não do médico
//um médico só pode ser deletado por um hospital logado
medicoHospitalRouter.delete('/:id',autenticacao,remove);//ainda preciso do id, pois a autorização é do hospital e não do médico

module.exports = medicoHospitalRouter;