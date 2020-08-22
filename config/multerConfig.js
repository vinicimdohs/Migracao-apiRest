const multer = require('multer');
const {extname,resolve} = require('path');

const aleatorio = ()=> Math.floor(Math.random()*10000+10000);

const multerConfig = multer.diskStorage
({
        destination: (req,file,cb)=>{
            cb(null, resolve(__dirname,'..','uploads'));

        },
        filename: (req,file,cb)=>{
            cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
        },
});


module.exports = {
    storage:multerConfig,
    fileFilter: (req,file,cb)=>{
        if(file.mimetype != 'image/png' && file.mimetype != 'image/jpeg'){
            return cb(new multer.MulterError('Arquivo precisa ser PNG ou jpeg'));
        }
        return cb(null,true);
    }
};