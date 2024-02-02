import { Resolvers } from "../generated/resolvers-types";
import Mutations from "./mutations";
import Queries from "./queries";
const resolvers: Resolvers = {
  Query: Queries,
  Mutation: Mutations,
};
export default resolvers;
