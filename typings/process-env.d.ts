declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      DB_USERNAME: string;
      DB_PASSWORD: string;
      DOG_FACTS_API_URL: string;
      DOG_IMAGES_API_URL: string;
      API_URL: string;
      AUTH0_DOMAIN: string;
      // add more environment variables and their types here
    }
  }
}
export {};
