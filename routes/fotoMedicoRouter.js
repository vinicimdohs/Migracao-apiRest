const express = require('express');
const fotoMedicoRouter = express.Router();

const {autenticacao} = require('../middlewares/loginRequired.js');
const {store,findAll} = require('../services/FotoHospitalService.js');
//const upload = multer(multerConfig);

fotoMedicoRouter.post('/',autenticacao,store);
fotoMedicoRouter.get('/',findAll);

module.exports = fotoMedicoRouter;