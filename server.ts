import { ApolloServer } from "@apollo/server";
import { readFileSync } from "fs";
import "dotenv/config";

import { startStandaloneServer } from "@apollo/server/standalone";
import resolvers from "./src/resolvers";
import { getUser } from "./src/utils";
const typeDefs = readFileSync("./schema.graphql", { encoding: "utf-8" });
const server = new ApolloServer({ typeDefs, resolvers });
async function setup() {
  const { url } = await startStandaloneServer(server, {
    context: async ({ req, res }) => {
      // Get the user token from the headers.
      const token = req.headers.authorization || "";

      // Try to retrieve a user with the token
      const user = await getUser(token);
      // if (!user)
      // // throwing a `GraphQLError` here allows us to specify an HTTP status code,
      // // standard `Error`s will have a 500 status code by default
      // throw new GraphQLError('User is not authenticated', {
      //   extensions: {
      //     code: 'UNAUTHENTICATED',
      //     http: { status: 401 },
      //   },
      // });
      // Add the user to the context
      return { user };
    },
    listen: { port: Number(process.env.PORT) },
  });
  console.log(`🚀  Server ready at: ${url}`);
}
setup();
export interface MyContext {
  dataSources: {
    booksAPI: [];
  };
}
