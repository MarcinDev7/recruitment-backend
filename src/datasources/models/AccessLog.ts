import mongoose from "mongoose";

const accessLogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  action: String,
  timestamp: Date,
});
const AccessLogModel = mongoose.model("AccessLog", accessLogSchema);
export default AccessLogModel;
