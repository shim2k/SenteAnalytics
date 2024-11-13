import { Router, Request, Response } from 'express';
import logger from '../utils/logger';
import DBServiceClass from '../services/db.service';

const routes = Router();

const db = new DBServiceClass();

function validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

routes.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the SenteAI API!');
});

routes.post('/send-email', async (req: Request, res: Response) => {
    const { email } = req.body;

    logger.info(`Received email subscription request: ${email}`);

    // Server-side validation
    if (!email || !validateEmail(email)) {
        logger.warn(`Invalid email address received: ${email}`);
        return res.status(400).json({ message: 'Invalid email address.' });
    }

    try {
        // Save the email to the database
        await db.saveEmail(email);
        logger.info(`Email saved successfully: ${email}`);
        res.status(200).json({ message: 'Email subscribed successfully.' });
    } catch (error) {
        logger.error(`Error saving email: ${error}`);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

routes.get('/get-email-list-sente', async (req: Request, res: Response) => {
    try {
        const emails = await db.getAllEmails();
        res.status(200).json(emails);
    } catch (error) {
        logger.error(`Error retrieving emails: ${error}`);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

export default routes;
