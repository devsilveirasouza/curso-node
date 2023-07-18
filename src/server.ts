import express, { Request, Response } from 'express';
// SERVIDOR
const server = express();
// CONFIGURANDO A PÁGINA PRINCIPAL
server.get('/', (req: Request, res: Response) => {
    res.send('Olá TYPES-NODE');
});

const HomePage = (req: Request, res: Response) => {
    res.send('Nova página...');
 };

 server.get('/nova-pagina', HomePage);
// ROTA DINÂMICA
 server.get('/noticia/:slug', (req: Request, res: Response)=>{
    let slug: string = req.params.slug;
    res.send(`Notícia: ${slug}`);
 });
// ROTA DINÂMICA
 server.get('/noticia/:slug', (req: Request, res: Response)=>{
    let slug: string = req.params.slug;
    res.send(`Notícia: ${slug}`);
 });
 server.get('/voo/:origem-:destino', (req: Request, res: Response)=>{
    // let origem: string   = req.params.origem;
    // let destino: string  = req.params.destino;
    let { origem, destino } = req.params;

    res.send(`Procurando Voo de ${origem.toUpperCase()} até ${destino.toUpperCase()}`);
 }); 
// DEFININDO A PORTA
server.listen(80);