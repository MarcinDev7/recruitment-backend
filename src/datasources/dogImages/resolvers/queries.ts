import { QueryResolvers } from "../generated-types";
import fetch from "node-fetch";
export type DogImage = {
  status: string;
  message: string;
};
const Queries: QueryResolvers = {
  dogImage: async () => {
    try {
      const response = await fetch(process.env.DOG_IMAGES_API_URL);
      const data = await response.json();
      return data as DogImage;
    } catch (error) {
      console.log("error", error);
    }
  },
};
export default Queries;
