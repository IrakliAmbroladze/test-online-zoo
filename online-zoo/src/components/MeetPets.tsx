import { useEffect, useState, type Ref } from "react";
import { MeetPetsSlider } from "./MeetPetsSlider";
import { SearchPet } from "./SearchPet";
import type { Pet } from "../types/Pet";
import { fetchPets } from "../lib/fetchPets";
import type { Status } from "../types/Status";

type MeetPetsProps = {
  viewPortRef: Ref<HTMLDivElement>;
  moveLeft: () => void;
  moveRight: () => void;
  sliderRef: Ref<HTMLDivElement>;
  offset: number;
};
export const MeetPets = ({
  viewPortRef,
  moveLeft,
  moveRight,
  sliderRef,
  offset,
}: MeetPetsProps) => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [filteredPets, setFilteredPets] = useState<Pet[]>([]);
  const [status, setStatus] = useState<Status>("loading");
  useEffect(() => {
    fetchPets()
      .then((data) => {
        setPets(data);
        setFilteredPets(data);
        setStatus("success");
      })
      .catch((err) => {
        console.error(err instanceof Error ? err.message : err);
        setStatus("error");
      });
  }, []);

  const handleSearch = (value: string) => {
    const searchValue = value.toLowerCase();

    const filtered = pets.filter((pet) => {
      const common = pet.commonName?.toLowerCase() ?? "";
      const desc = pet.description?.toLowerCase() ?? "";
      const name = pet.name?.toLowerCase() ?? "";

      return (
        common.includes(searchValue) ||
        desc.includes(searchValue) ||
        name.includes(searchValue)
      );
    });

    setFilteredPets(filtered);
  };

  return (
    <section className="meet-pets">
      <div ref={viewPortRef} className="container" id="pets-container">
        <div className="intro">
          <h2>Meet some our pets</h2>
          <p>
            Do you have a special place in your heart for animals? Who are your
            favorites? Perhaps you'd like to donate to special ones or all our
            pets? We think it's important for you to choose how your donation is
            used.
          </p>
        </div>
        <div>
          <SearchPet onSearch={handleSearch} />
          <div className="slider-arrows">
            <div className="left" onClick={moveLeft} />
            <div className="right" onClick={moveRight} />
          </div>
        </div>
        <MeetPetsSlider
          sliderRef={sliderRef}
          offset={offset}
          pets={filteredPets}
          status={status}
        />
        <button className="btn btn--font-navy btn-favorite">
          <span>choose your favorite</span>
          <img src="./assets/icons/arrow.svg" alt="arrow" />
        </button>
      </div>
    </section>
  );
};
