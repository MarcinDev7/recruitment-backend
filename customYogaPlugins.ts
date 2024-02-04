import { Plugin } from "graphql-yoga";
import mongoose from "mongoose";
import AccessLogModel from "./src/datasources/mongo/models/AccessLogs";

type ServerContext = {
  auth0?: {
    sub: string;
  };
  params: {
    query: string;
  };
};

function useAccessLogWrite(): Plugin {
  return {
    async onResponse({ serverContext, request, response }) {
      if (request.headers.get("authorization")) {
        const timestamp = new Date().toISOString();
        const user = request?.headers?.["user"];
        const logEntry = {
          timestamp,
          userId: (serverContext as ServerContext)?.auth0?.sub || user,
          method: request.method,
          path: request?.url,
          statusCode: response.status,
          query: (serverContext as ServerContext).params.query,
        };
        try {
          await AccessLogModel.create(logEntry);
        } catch (error) {
          console.log("Failed to save log entry:", logEntry);
        }
      }
    },
  };
}
export { useAccessLogWrite };
