const jwt  = require('jsonwebtoken');

exports.autenticacao= async(req,res,next)=>{
    const { authorization} = req.headers;

    if(!authorization){
        return res.status(401).json({
            errors:['Ação não autorizada']
        });
    }

    const [,token] = authorization.split(' ');

    try{
        const dados = jwt.verify(token,process.env.TOKEN_SECRET_HOSPITAL);

        const {hospital_id,email} = dados;
        req.userid = hospital_id;
        req.userEmail = email;
        return next();
    }catch(e){
        return res.status(401).json({
            errors:['Token expirado ou inválido']
        });
    }


};