import { GraphQLError } from "graphql";
import { QueryResolvers } from "../generated-types";
import fetch from "node-fetch";
export type DogFact = {
  success: boolean;
  facts: string;
};
const Queries: QueryResolvers = {
  dogFact: async (root, args, context) => {
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
    try {
      const response = await fetch(process.env.DOG_FACTS_API_URL);
      const data = await response.json();
      return data as DogFact;
    } catch (error) {
      console.log("error", error);
    }
  },
};
export default Queries;
