const express = require('express');
const tokenRouter = express.Router();
const {store} = require('../services/tokenHospitalService');

tokenRouter.post('/',store);

 module.exports = tokenRouter;