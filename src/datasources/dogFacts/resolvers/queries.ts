import { QueryResolvers } from "../generated-types";
import fetch from "node-fetch";
export type DogFact = {
  success: boolean;
  facts: string;
};
const Queries: QueryResolvers = {
  dogFact: async () => {
    try {
      const response = await fetch(process.env.DOG_FACTS_API_URL);
      const data = await response.json();
      return data as DogFact;
    } catch (error) {
      console.log("error", error);
    }
  },
};
export default Queries;
