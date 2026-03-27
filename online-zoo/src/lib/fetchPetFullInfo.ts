import type { PetFullInfo } from "../types/PetFullInfo";
import { fetchData } from "./fetchData";

export const fetchPetFullInfo = (id: number) =>
  fetchData<PetFullInfo>(
    `https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/pets/${id}`,
  );
