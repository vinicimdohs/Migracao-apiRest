const express = require('express');
const fotoMedicoRouter = express.Router();

const {autenticacao} = require('../middlewares/loginRequired.js');
const {store,findAll,findOne,remove} = require('../services/FotoHospitalService.js');
//const upload = multer(multerConfig);

fotoMedicoRouter.post('/',autenticacao,store);//medico logado para criar a foto
fotoMedicoRouter.get('/',findAll);
fotoMedicoRouter.get('/:id',findOne);
fotoMedicoRouter.delete('/',autenticacao,remove);//medico logado para remover a foto

module.exports = fotoMedicoRouter;