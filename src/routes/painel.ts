import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response)=>{
    res.send('HOME do painel');
});

router.get('/contato', (req: Request, res: Response)=>{
    res.send('Lista de notícias cadastradas.');
});

export default router;