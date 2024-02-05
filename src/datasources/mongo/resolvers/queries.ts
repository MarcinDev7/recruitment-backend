import { QueryResolvers } from "../generated-types";
import UserModel from "../models/Users";
import AccessLogModel from "../models/AccessLogs";
import { GraphQLError } from "graphql";

const Queries: QueryResolvers = {
  users: async () => {
    const data = await UserModel.find();

    return data;
  },
  accessLogs: async (_source, _args, context) => {
    if (!context.auth0) {
      throw new GraphQLError(
        `User not found.`,
        // error extensions
        {
          extensions: {
            http: {
              status: 401,
            },
          },
        }
      );
    }
    return await AccessLogModel.find();
  },
  authInfo(_source, _args, context) {
    return context.auth0;
  },
};
export default Queries;
