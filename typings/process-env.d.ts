declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      DB_USERNAME: string;
      DB_PASSWORD: string;
      DOG_FACTS_API_URL: string;
      DOG_IMAGES_API_URL: string;
      // add more environment variables and their types here
    }
  }
}
export {};
