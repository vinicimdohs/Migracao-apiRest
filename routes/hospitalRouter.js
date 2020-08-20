const express = require('express');
const hospitalRouter = express.Router();
const {create, findAll, findOne, update,remove} = require('../services/hospitalService.js');

hospitalRouter.post('/',create);
hospitalRouter.get('/',findAll);
hospitalRouter.get('/:id',findOne);
hospitalRouter.put('/:id',update);
hospitalRouter.delete('/:id',remove);

module.exports = hospitalRouter;