const express = require('express');
const fotoMedicoRouter = express.Router();

const {autenticacao} = require('../middlewares/loginRequired.js');
const {store,findAll,findOne,remove} = require('../services/FotoHospitalService.js');
//const upload = multer(multerConfig);

//a foto só pode ser postada por um hospital logado
fotoMedicoRouter.post('/',autenticacao,store);

fotoMedicoRouter.get('/',findAll);
fotoMedicoRouter.get('/:id',findOne);

//a foto só pode ser removida por um hospital logado
fotoMedicoRouter.delete('/',autenticacao,remove);

module.exports = fotoMedicoRouter;