import { useEffect, useState, type Ref } from "react";
import { fetchPets } from "../lib/fetchPets";
import type { Pet } from "../types/Pet";
import { PETS } from "../types/PETS";

type Status = "loading" | "error" | "success";

const getAnimalImage = (commonName: string) =>
  Object.keys(PETS).find((name) => commonName.toLowerCase().includes(name)) ??
  "koala";

type Props = {
  sliderRef: Ref<HTMLDivElement | null>;
  offset: number;
};

export const MeetPetsSlider = ({ sliderRef, offset }: Props) => {
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
