import { createServer } from "@graphql-yoga/node";

import "dotenv/config";

import { mongoConnect } from "./mongoConnect";
import getGatewaySchema from "./getGatewaySchema";

async function main() {
  try {
    const server = createServer({
      schema: getGatewaySchema(),
      port: Number(process.env.PORT) || 4000,
      context: {},
    });

    await server.start();
  } catch (error) {
    console.log("error", error);
  }
}

mongoConnect()
  .then(() => {
    return main().then(() => {
      console.log("Server started on port: " + process.env.PORT);
    });
  })
  .catch((error) => console.log("error", error));
