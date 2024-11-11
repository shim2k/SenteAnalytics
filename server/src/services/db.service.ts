import EmailModel, { IEMail } from '../models/email.model';

class DBServiceClass {
    constructor() { }

    // Save a message to the database
    async saveEmail(
        email: number,
    ): Promise<void> {
        const newEmail = new EmailModel({
            email
        });
        await newEmail.save();
    }

    async getAllEmails(): Promise<string[]> {
        const emails = await EmailModel.find({}).exec();
        return emails.map((email) => email.toObject().email);
    }

    // async deleteEmails(): Promise<void> {
    //     await EmailModel.deleteMany({}).exec();
    // }
}

export default DBServiceClass;
