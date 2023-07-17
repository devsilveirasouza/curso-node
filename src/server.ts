import express, { Request, Response } from 'express';
// SERVIDOR
const server = express();
// CONFIGURANDO A PÁGINA PRINCIPAL
server.get('/', (req: Request, res: Response) => {
    res.send('Olá TYPES-NODE');
});
// DEFININDO A PORTA
server.listen(80);