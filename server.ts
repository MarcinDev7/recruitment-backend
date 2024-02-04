import { createYoga, useExtendContext } from "graphql-yoga";
import { createServer } from "http";
import { useAuth0 } from "@envelop/auth0";

import "dotenv/config";

import { mongoConnect } from "./mongoConnect";
import getGatewaySchema from "./getGatewaySchema";
import { useAccessLogWrite } from "./customYogaPlugins";

async function main() {
  try {
    const yoga = createYoga({
      schema: getGatewaySchema(),
      plugins: [
        useAuth0({
          domain: process.env.AUTH0_DOMAIN,
          audience: process.env.API_URL,
          extendContextField: "auth0",
        }),
        useExtendContext(async (contextSoFar) => {
          return {
            userId: contextSoFar?.auth0?.sub,
          };
        }),
        useAccessLogWrite(),
      ],
    });

    const server = createServer(yoga);

    await server.listen(Number(process.env.PORT) || 4000);
  } catch (error) {
    // logging server error
    console.log("error", error);
  }
}

mongoConnect()
  .then(async () => {
    await main().then(() => {
      console.log("Server started on port: " + process.env.PORT);
    });
  })
  .catch((error) => console.log("Unknown error!", error));
