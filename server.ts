import { createYoga } from "graphql-yoga";
import { createServer } from "http";
import "dotenv/config";

import { mongoConnect } from "./mongoConnect";
import getGatewaySchema from "./getGatewaySchema";

async function main() {
  try {
    const yoga = createYoga({
      schema: getGatewaySchema(),
      context: {},
    });

    const server = createServer(yoga);

    await server.listen(Number(process.env.PORT) || 4000);
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
