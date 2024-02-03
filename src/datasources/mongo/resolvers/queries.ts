import { QueryResolvers } from "../generated-types";
import UserModel from "../models/Users";
import AccessLogModel from "../models/AccessLogs";
import mongoose from "mongoose";

const Queries: QueryResolvers = {
  users: async () => {
    const data = await UserModel.find();

    return data;
  },
  accessLogs: async () => await AccessLogModel.find(),
};
export default Queries;
