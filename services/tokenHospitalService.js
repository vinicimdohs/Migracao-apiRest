 const HospitalModel = require('../models/HospitalModel.js');
 const jwt = require('jsonwebtoken');
 const hospital = new HospitalModel();

 exports.store = async (req,res)=>{
    try{

        const {email = '',senha = ''} = req.body;

        if(!email || !senha){
            return res.status(401).json({
                errors: ['Credenciais inválidas']
            });
        }
        
        const user = await HospitalModel.findOne({email:email})

        if(!user){
            return res.status(401).json({
                errors: ['Hospital não existe']
            });
        }

        if(senha != user.senha)return res.status(401).json({
            errors: ['Senha inválida']
        });
        const{ hospital_id } = user;
        const token = jwt.sign({hospital_id , email},process.env.TOKEN_SECRET_HOSPITAL,{
            expiresIn: process.env.TOKEN_EXPIRATION
        });

        return res.json({token});
    }catch(e){
        res.status(500).send(e);
    }
        
}


