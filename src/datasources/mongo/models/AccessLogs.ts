import mongoose from "mongoose";
export interface AccessLog {
  _id: string;
  userId: string; // Assuming userId is a string, you can adjust it based on your actual setup
  method: string;
  timestamp: Date;
  query: string;
  statusCode: number;
  path: string;
}
const accessLogSchema = new mongoose.Schema({
  userId: String!,
  timestamp: Date!,
  method: String!,
  query: String!,
  statusCode: Number!,
  path: String!,
});
const AccessLogModel = mongoose.model<AccessLog>(
  "AccessLog",
  accessLogSchema,
  "AccessLogs"
);
export default AccessLogModel;
