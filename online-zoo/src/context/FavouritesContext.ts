import { createContext } from "react";

type FavouritesContextType = {
  favouritePetIds: number[];
  toggleFavourite: (id: number) => void;
};

export const FavouritesContext = createContext<
  FavouritesContextType | undefined
>(undefined);
