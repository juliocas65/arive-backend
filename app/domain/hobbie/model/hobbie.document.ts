import mongoose from 'mongoose';
import { HobbiePassionLevel } from './hobbie.passion-level.enum';

export interface HobbiesDocument extends mongoose.Document {
  name: string;
  user: string;
  passionLevel: HobbiePassionLevel;
  year: number;
  createdAt: Date;
  updatedAt: Date;
}
