import { type ReactNode } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { FavouritesContext } from "./FavouritesContext";

export const FavouritesProvider = ({ children }: { children: ReactNode }) => {
  const [favouritePetIds, setFavouritePetIds] = useLocalStorage<number[]>(
    "favourites",
    [],
  );

  const toggleFavourite = (id: number) => {
    setFavouritePetIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  return (
    <FavouritesContext.Provider value={{ favouritePetIds, toggleFavourite }}>
      {children}
    </FavouritesContext.Provider>
  );
};
