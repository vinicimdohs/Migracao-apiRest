const express = require('express');
const medicoHospitalRouter = express.Router();
const {create, findAll, findOne, update,remove} = require('../services/medicoHospitalService.js');

medicoHospitalRouter.post('/',create);
medicoHospitalRouter.get('/',findAll);
medicoHospitalRouter.get('/:id',findOne);
medicoHospitalRouter.put('/:id',update);
medicoHospitalRouter.delete('/:id',remove);

module.exports = medicoHospitalRouter;