import MessageModel, { IMessage } from '../models/message.model';
import ReminderModel, { IReminder } from '../models/reminder.model';
import UserModel, { IUser } from '../models/user.model';

class DBServiceClass {
    constructor() { }

    // Save a message to the database
    async saveMessage(
        userId: number,
        username: string,
        message: string,
        from: 'user' | 'assistant',
        date: any
    ): Promise<void> {
        const newMessage = new MessageModel({
            userId,
            username,
            message,
            from,
            timestamp: date,
        });
        await newMessage.save();
    }

    // Get messages for a user
    async getMessages(userId: number): Promise<IMessage[]> {
        // use for testing to delete all my messages:
        // console.log(await MessageModel.deleteMany({ userId: 1555167545 }));
        return MessageModel.find({ userId }).sort({ timestamp: 1 }).exec();
    }

    // Add a reminder to the database
    async addReminder(reminderData: Omit<IReminder, '_id'>): Promise<IReminder> {
        const reminder = new ReminderModel(reminderData);
        await reminder.save();
        return reminder;
    }

    // Update a reminder by reminderId
    async updateReminderByReminderId(
        userId: number,
        reminderId: string,
        updateData: Partial<IReminder>
    ): Promise<IReminder | null> {
        const updatedReminder = await ReminderModel.findOneAndUpdate(
            { userId, reminderId },
            updateData,
            { new: true }
        ).exec();

        return updatedReminder;
    }

    // Cancel a reminder by reminderId
    async cancelReminderByReminderId(userId: number, reminderId: string): Promise<boolean> {
        const result = await ReminderModel.deleteOne({ userId, reminderId });
        return result.deletedCount > 0;
    }

    // Get all reminders from the database
    async getAllReminders(): Promise<IReminder[]> {
        // use for testing to delete all my reminders:
        // console.log(await ReminderModel.deleteMany({ userId: 1555167545 }));
        return ReminderModel.find({}).exec();
    }

    // Get reminders for a specific user
    async getRemindersByUserId(userId: number): Promise<IReminder[]> {
        return ReminderModel.find({ userId }).exec();
    }

    // Save or update user's time zone
    async setUserTimeZone(userId: number, timeZone: string): Promise<IUser> {
        const user = await UserModel.findOneAndUpdate(
            { userId },
            { timeZone },
            { upsert: true, new: true }
        ).exec();
        return user;
    }

    // Get user's time zone
    async getUserTimeZone(userId: number): Promise<string | null> {
        const user = await UserModel.findOne({ userId }).exec();
        return user?.timeZone || null;
    }

}

export default DBServiceClass;
