import { Resolvers } from "../generated-types";
import Mutations from "./mutations";
import Queries from "./queries";
const resolvers: Resolvers = {
  Query: Queries,
  Mutation: Mutations,
};
export default resolvers;
