import mongoose from 'mongoose';

export interface UserDocument extends mongoose.Document {
  name: string;
  createdAt: Date;
  updatedAt: Date;
}
