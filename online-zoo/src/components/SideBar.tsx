import { Star } from "lucide-react";
import { useState } from "react";
import { useFavourites } from "../hooks/useFavourites";
import { usePets } from "../hooks/usePets";
import { Link } from "react-router-dom";

export const SideBar = () => {
  const [shrinked, setShrinked] = useState(true);
  const { favouritePetIds, toggleFavourite } = useFavourites();
  const { pets, petImageSource } = usePets();
  return (
    <section className="sidebar-container">
      <div className={`sidebar ${shrinked ? "shrinked" : ""}`}>
        <div className="sidebar-header">
          <div className="title">
            {shrinked ? <Star color="#dfe228" /> : "my favourite pets"}
            <span className="count">
              {favouritePetIds.length <= 0 ? "" : favouritePetIds.length}
            </span>
          </div>
          <div
            className="double_arrow"
            onClick={() => setShrinked((prev) => !prev)}
          >
            <img src="/assets/icons/double_arrow.svg" alt="double_arrow" />
          </div>
        </div>
        <div className="list">
          {!shrinked &&
            favouritePetIds.map((item) => {
              if (favouritePetIds.length > 0 && pets.length <= 0) {
                return <div>something went wrong, please refresh the page</div>;
              }
              const pet = pets.find((pet) => pet.id === item);
              if (!pet) return;
              return (
                <div className="item" key={pet.id}>
                  <div
                    className="remove-favourite"
                    onClick={() => toggleFavourite(pet.id)}
                  >
                    remove
                  </div>
                  <Link to={`zoos?petId=${pet.id}`} className="live-btn">
                    <button className="btn btn--pure-text-orange">
                      <span>live cam</span>
                    </button>
                  </Link>

                  <div className="item-image-container">
                    <img
                      src={petImageSource(pet.commonName)}
                      alt={pet.commonName}
                    />
                  </div>
                  <div className="text-container">
                    <div>{pet.name}</div>
                    <div>{pet.commonName}</div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};
