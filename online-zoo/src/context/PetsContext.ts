import { createContext } from "react";
import type { Pet } from "../types/Pet";

export const PetsContext = createContext<Pet[] | undefined>(undefined);
