import express, { Request, Response } from 'express';
// IMPORTANDO AS ROTAS
import mainRouttes from './routes/index'
import painelRoutes from './routes/painel'
// SERVIDOR
const server = express();
// INSERINDO AS ROTAS NO SERVIDOR
server.use(mainRouttes);
server.use('/painel', painelRoutes);
// DEFININDO ROTA DA PÁGINA NÃO ENCONTRADA
server.use((req: Request, res: Response) => {
    res.status(404).send('Página não encontrada!');
});
// DEFININDO A PORTA
server.listen(80);