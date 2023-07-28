import { Router, Request, Response } from 'express';

const router = Router();
// DEFININDO AS ROTAS
router.get('/', (req: Request, res: Response)=>{
    res.send('Ola Mundo!');
});

router.get('/contato', (req: Request, res: Response)=>{
    res.send('Formulário de contato.');
});

router.get('/sobre', (req: Request, res: Response)=>{
    res.send('Página institucional sobre a empresa.');
});
router.get('/noticias', (req: Request, res: Response) => {
    res.send('Lista de notícias...');
});

// EXPORTANDO AS ROTAS PARA USO
export default router;