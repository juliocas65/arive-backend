import mongoose from 'mongoose';
import { HobbiesDocument } from './hobbie.document';
import { HobbiePassionLevel } from './hobbie.passion-level.enum';

const HobbiesSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    passionLevel: { type: String, required: true, enum: HobbiePassionLevel },
    year: { type: Number, required: true }
  },
  { timestamps: true }
);

const Hobbies = mongoose.model<HobbiesDocument>('Hobbies', HobbiesSchema);

export default Hobbies;