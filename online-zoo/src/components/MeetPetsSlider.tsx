import { type Ref } from "react";
import type { Pet } from "../types/Pet";
import { PETS } from "../types/PETS";
import type { Status } from "../types/Status";

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
        const animal = getAnimalImage(pet.commonName);
        return (
          <div key={pet.commonName} className="animals-card">
            <label>{pet.commonName}</label>
            <div className="cover">
              <img src={`./assets/images/${animal}.png`} alt={animal} />
            </div>
            <div className="title">{pet.commonName}</div>
            <p>{pet.description}</p>
            <button className="btn btn--pure-text-orange">
              <span>view live cam</span>
              <img src="./assets/icons/arrow.svg" alt="arrow" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
