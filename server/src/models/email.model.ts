import mongoose, { Document, Schema } from 'mongoose';

export interface IEMail extends Document {
  email: string;
}

const EmailSchema: Schema = new Schema({
  email: { type: String, required: true },
});

export default mongoose.model<IEMail>('Email', EmailSchema);
