import { useEffect, useState, type ReactNode } from "react";
import { PetsContext } from "./PetsContext";
import { fetchPets } from "../lib/fetchPets";
import type { Pet } from "../types/Pet";
import type { Status } from "../types/Status";
import { PETS } from "../types/PETS";

export const PetsProvider = ({ children }: { children: ReactNode }) => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [status, setStatus] = useState<Status>("loading");
  useEffect(() => {
    fetchPets()
      .then((data) => {
        setPets(data);
        setStatus("success");
      })
      .catch((err) => {
        console.error(err instanceof Error ? err.message : err);
        setStatus("error");
      });
  }, []);
  const getAnimalImage = (commonName: string) =>
    Object.keys(PETS).find((name) => commonName.toLowerCase().includes(name)) ??
    "koala";

  const petImageSource = (commonName: string) => {
    const animal = getAnimalImage(commonName);
    return `/assets/images/${animal}.png`;
  };
  return (
    <PetsContext.Provider value={{ pets, status, petImageSource }}>
      {children}
    </PetsContext.Provider>
  );
};
