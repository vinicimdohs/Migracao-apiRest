const PacienteModel = require('../models/PacienteModel.js');
const jwt = require('jsonwebtoken');
const paciente = new PacienteModel();

exports.storePaciente = async (req,res)=>{
   try{

       const {email = '',senha = ''} = req.body;

       if(!email || !senha){
           return res.status(401).json({
               errors: ['Credenciais inválidas']
           });
       }
       
       const user = await PacienteModel.findOne({email:email})

       if(!user){
           return res.status(401).json({
               errors: ['Hospital não existe']
           });
       }

       if(senha != user.senha)return res.status(401).json({
           errors: ['Senha inválida']
       });
       const{ _id } = user;
       const token = jwt.sign({_id , email},process.env.TOKEN_SECRET_PACIENTE,{
           expiresIn: process.env.TOKEN_EXPIRATION
       });

       return res.json({token});
   }catch(e){
       res.status(500).send(e);
   }
       
}