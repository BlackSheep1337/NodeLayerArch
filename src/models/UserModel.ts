import { Schema, model } from 'mongoose';
import { User } from '../types/User';

const userSchema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export const UserModel = model<User>("User", userSchema);