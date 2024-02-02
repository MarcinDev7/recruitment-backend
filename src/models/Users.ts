import mongoose, { Document } from "mongoose";
const { Schema, model } = mongoose;

export interface User {
  _id: string;
  name: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

const userSchema = new Schema({
  name: String,
  role: String,
  createdAt: Date,
  updatedAt: Date,
});

const UserModel = model<User>("User", userSchema);
export default UserModel;
