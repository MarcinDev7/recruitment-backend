import { createServer } from "@graphql-yoga/node";

import "dotenv/config";

import { mongoConnect } from "./mongoConnect";
import { gatewaySchema } from "./getGatewaySchema";

async function main() {
  try {
    const server = createServer({
      schema: gatewaySchema,
      port: 4003,
      context: {},
    });

    await server.start();
  } catch (error) {
    console.log("error", error);
  }
}

mongoConnect()
  .then(() => {
    console.log("Connected to database");
    return main();
  })
  .catch((error) => console.log("error", error));
