import { QueryResolvers } from "../generated-types";

export type DogFact = {
  success: boolean;
  facts: string;
};

const Queries: QueryResolvers = {
  dogFact: async () => {
    try {
      const response = await fetch("https://dog-api.kinduff.com/api/facts");
      const data = await response.json();
      return data as DogFact;
    } catch {}
  },
};
export default Queries;
