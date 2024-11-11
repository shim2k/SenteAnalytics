import { Router, Request, Response } from 'express';
import logger from '../utils/logger';
import DBServiceClass from '../services/db.service';

const routes = Router();

const db = new DBServiceClass();

routes.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the SenteAI API!');
});

routes.post('/send-email', (req: Request, res: Response) => {
    logger.info(JSON.stringify(req.body.email));
    db.saveEmail(req.body.email);
    res.send('success');
});

routes.get('/get-email-list-sente', async (req: Request, res: Response) => {
    const emails = await db.getAllEmails();
    res.send(emails);
});

export default routes;
