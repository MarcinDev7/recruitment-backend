import UserModel from "../datasources/models/Users";
import AccessLogModel from "../datasources/models/AccessLog";

const Queries = {
  users: async () => await UserModel.find({}),
  accessLogs: async () => await AccessLogModel.find({}),
};
export default Queries;
