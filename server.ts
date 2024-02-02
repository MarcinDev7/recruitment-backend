import { createServer } from "@graphql-yoga/node";
import { loadSchema } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { addResolversToSchema } from "@graphql-tools/schema";
import { stitchSchemas } from "@graphql-tools/stitch";
import "dotenv/config";

import { mongoConnect } from "./mongoConnect";
import mongoResolvers from "./src/datasources/mongo/resolvers";
import dogFactsResolvers from "./src/datasources/dogFacts/resolvers";

const dogFactsSchema = await loadSchema(
  "./src/datasources/dogFacts/schema.graphql",
  {
    loaders: [new GraphQLFileLoader()],
  }
);
const dogFactsSchemaWithResolvers = addResolversToSchema({
  schema: dogFactsSchema,
  resolvers: dogFactsResolvers,
});

const dogFactsSubschema = { schema: dogFactsSchemaWithResolvers };
const mongoSchema = await loadSchema("./src/datasources/mongo/schema.graphql", {
  loaders: [new GraphQLFileLoader()],
});
const mongoSchemaWithResolvers = addResolversToSchema({
  schema: mongoSchema,
  resolvers: mongoResolvers,
});
const mongoSubschema = { schema: mongoSchemaWithResolvers };
const gatewaySchema = stitchSchemas({
  subschemas: [mongoSubschema, dogFactsSubschema],
});

async function main() {
  const server = createServer({
    schema: gatewaySchema,
    port: Number(process.env.PORT),
  });

  await server.start();
}

mongoConnect().then(() => {
  console.log("Connected to database");
  return main();
});
