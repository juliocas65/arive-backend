import mongoose from 'mongoose';
import { UserDocument } from './user.document';

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true }
  },
  { timestamps: true }
);

const User = mongoose.model<UserDocument>('User', UserSchema);

export default User;