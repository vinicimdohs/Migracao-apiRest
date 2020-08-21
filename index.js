const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const hospitalRouter = require('./routes/hospitalRouter');
const medicoHospitalRouter = require('./routes/medicoHospitalRouter');
const pacienteRouter = require('./routes/pacienteRouter');
const tokenRouter = require('./routes/tokenRouter');

const path = require('path');
const dotenv = require('dotenv');

dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());

//rotas
app.use('/api/hospital',hospitalRouter);
app.use('/api/medicoHospital',medicoHospitalRouter);
app.use('/api/paciente',pacienteRouter);
app.use('/api/token',tokenRouter);

/*
*Conexão ao Banco de Dados
*/

const { DB_CONNECTION } = process.env;

console.log('Iniciando conexão ao MongoDB...');
mongoose.connect(
  DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      connectedToMongoDB = false;
      console.error(`Erro na conexão ao MongoDB - ${err}`);
    }
  }
);

const { connection } = mongoose;

connection.once('open', () => {
  connectedToMongoDB = true;
  console.log('Conectado ao MongoDB');

  /**
   * Definição de porta e
   * inicialização do app
   */
  const APP_PORT = process.env.PORT || 3001;
  app.listen(APP_PORT, () => {
    console.log(`Servidor iniciado na porta ${APP_PORT}`);
  });
});