declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      DB_USERNAME: string;
      DB_PASSWORD: string;
      // add more environment variables and their types here
    }
  }
}
export {};
