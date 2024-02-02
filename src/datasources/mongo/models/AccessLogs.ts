import mongoose from "mongoose";
export interface AccessLog {
  _id: string;
  userId: string; // Assuming userId is a string, you can adjust it based on your actual setup
  action: string;
  timestamp: Date;
}
const accessLogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  action: String,
  timestamp: Date,
});
const AccessLogModel = mongoose.model<AccessLog>("AccessLog", accessLogSchema);
export default AccessLogModel;
