import mongoResolvers from "./src/datasources/mongo/resolvers";
import dogFactsResolvers from "./src/datasources/dogFacts/resolvers";
import dogImagesResolvers from "./src/datasources/dogImages/resolvers";
import { loadSchema } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { addResolversToSchema } from "@graphql-tools/schema";
import { stitchSchemas } from "@graphql-tools/stitch";

// dogFacts api Schema
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

// dogImages api Schema
const dogImagesSchema = await loadSchema(
  "./src/datasources/dogImages/schema.graphql",
  {
    loaders: [new GraphQLFileLoader()],
  }
);
const dogImagesSchemaWithResolvers = addResolversToSchema({
  schema: dogImagesSchema,
  resolvers: dogImagesResolvers,
});
const dogImagesSubschema = { schema: dogImagesSchemaWithResolvers };

// own mongoSchema
const mongoSchema = await loadSchema("./src/datasources/mongo/schema.graphql", {
  loaders: [new GraphQLFileLoader()],
});
const mongoSchemaWithResolvers = addResolversToSchema({
  schema: mongoSchema,
  resolvers: mongoResolvers,
});
const mongoSubschema = { schema: mongoSchemaWithResolvers };

const getGatewaySchema = () =>
  stitchSchemas({
    subschemas: [mongoSubschema, dogFactsSubschema, dogImagesSubschema],
  });
export default getGatewaySchema;
