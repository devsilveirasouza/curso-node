import express, { Request, Response } from 'express';
// IMPORTANDO AS ROTAS
import mainRouttes from './routes/index'
import painelRoutes from './routes/painel'
// SERVIDOR
const server = express();
// INFORMANDO O SERVIDOR AS ROTAS DE USO
server.use(mainRouttes);
server.use('/painel', painelRoutes);
// DEFININDO A PORTA
server.listen(80);