import { type Ref } from "react";
import type { Pet } from "../types/Pet";
import { PETS } from "../types/PETS";
import type { Status } from "../types/Status";
import { Star, StarHalf } from "lucide-react";
import { useFavourites } from "../hooks/useFavourites";
import { Link } from "react-router-dom";

const getAnimalImage = (commonName: string) =>
  Object.keys(PETS).find((name) => commonName.toLowerCase().includes(name)) ??
  "koala";

type Props = {
  sliderRef: Ref<HTMLDivElement | null>;
  offset: number;
  pets: Pet[];
  status: Status;
};

export const MeetPetsSlider = ({ sliderRef, offset, pets, status }: Props) => {
  const { favouritePetIds, toggleFavourite } = useFavourites();
  if (status === "loading")
    return <div className="loader">Loading pets...</div>;
  if (status === "error")
    return <p>Something went wrong. Please, refresh the page</p>;
  return (
    <div
      ref={sliderRef}
      style={{ transform: `translateX(${offset}px)` }}
      className="slider-pets-in-zoo"
    >
      {pets.map((pet) => {
        const is_favourite = favouritePetIds.includes(pet.id);
        const animal = getAnimalImage(pet.commonName);
        return (
          <div key={pet.id} className="animals-card">
            <label className="pet-name">{pet.name}</label>
            <label
              className={`add-favourite ${is_favourite ? "is-favourite" : ""}`}
              onClick={() => toggleFavourite(pet.id)}
            >
              {is_favourite ? (
                <>
                  <span>added as</span> <Star />
                </>
              ) : (
                <>
                  <span>add as</span> <StarHalf />
                </>
              )}
            </label>
            <div className="cover">
              <img src={`./assets/images/${animal}.png`} alt={animal} />
            </div>
            <div className="title">{pet.commonName}</div>
            <p>{pet.description}</p>
            <Link to={`zoos?petId=${pet.id}`}>
              <button className="btn btn--pure-text-orange">
                <span>view live cam</span>
                <img src="./assets/icons/arrow.svg" alt="arrow" />
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
