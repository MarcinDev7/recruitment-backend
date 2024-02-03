import mongoose from "mongoose";

export const mongoConnect = (): Promise<void> => {
  const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@testdb.ocqons6.mongodb.net/?retryWrites=true&w=majority`;

  return new Promise((resolve, reject) => {
    mongoose
      .connect(connectionString)
      .then(() => {
        console.log("Connected to the database");
        resolve();
      })
      .catch((error) => {
        console.error("Error connecting to the database:", error.message);
        reject(error);
      });
  });
};
