const express = require('express');
const hospitalRouter = express.Router();
const {create, findAll, findOne, update,remove} = require('../services/hospitalService.js');
const {autenticacao} = require('../middlewares/loginRequired.js');



//para o sistema poder listar os hospitais
hospitalRouter.get('/',findAll);
hospitalRouter.get('/:id',findOne);

//um hospital não cria outro hospital,porém na primeira vez ele
//se cria.
hospitalRouter.post('/',create);
//Somente o hospital logado pode dar update em si mesmo.
hospitalRouter.put('/',autenticacao,update);
//Somente um hospital logado, pode se remover.
hospitalRouter.delete('/',autenticacao,remove);

module.exports = hospitalRouter;