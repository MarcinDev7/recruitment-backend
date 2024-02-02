import UserModel from "../datasources/models/Users";
import AccessLogModel from "../datasources/models/AccessLog";

export const Queries = {
  users: async () => await UserModel.find({}),
  accessLogs: async () => await AccessLogModel.find({}),
};
