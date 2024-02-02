import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: String,
  role: String,
  createdAt: Date,
  updatedAt: Date,
});

const UserModel = model("User", userSchema);
export default UserModel;
