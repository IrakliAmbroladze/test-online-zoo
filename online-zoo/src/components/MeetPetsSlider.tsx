import { useEffect, useRef, useState } from "react";
import { fetchPets } from "../lib/fetchPets";
import type { Pet } from "../types/Pet";
import { PETS } from "../types/PETS";
import { useSlider } from "../hooks/useSlider";

const VIEWPORT = 800;
const CARD_SELECTOR = ".animals-card";

const getAnimalImage = (commonName: string) =>
  Object.keys(PETS).find((name) => commonName.toLowerCase().includes(name)) ??
  "koala";

type Status = "loading" | "error" | "success";

export const MeetPetsSlider = () => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [status, setStatus] = useState<Status>("loading");

  const sliderRef = useRef<HTMLDivElement>(null);
  const { offset, moveLeft, moveRight } = useSlider(
    sliderRef,
    VIEWPORT,
    CARD_SELECTOR,
  );

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

  return (
    <div className="slider-container">
      {status === "loading" && <div className="loader">Loading pets...</div>}

      {status === "error" && (
        <div className="error">
          <p>Something went wrong. Please, refresh the page</p>
        </div>
      )}

      {status === "success" && (
        <>
          <div id="slider">
            <div
              ref={sliderRef}
              style={{ transform: `translateX(${offset}px)` }}
              className="slider-track"
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
          </div>

          <button onClick={moveLeft} className="slider-btn slider-btn--prev">
            Prev
          </button>
          <button onClick={moveRight} className="slider-btn slider-btn--next">
            Next
          </button>
        </>
      )}
    </div>
  );
};
