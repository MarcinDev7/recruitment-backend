import { QueryResolvers } from "../generated-types";
import UserModel from "../models/Users";
import AccessLogModel from "../models/AccessLogs";

const Queries: QueryResolvers = {
  users: async () => await UserModel.find({}),
  accessLogs: async () => await AccessLogModel.find({}),
};
export default Queries;
