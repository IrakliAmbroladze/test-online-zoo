import { Star } from "lucide-react";
import { useState } from "react";
import { useFavourites } from "../hooks/useFavourites";

export const SideBar = () => {
  const [shrinked, setShrinked] = useState(true);
  const { favouritePetIds } = useFavourites();
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
            favouritePetIds.map((item) => <div className="item">{item}</div>)}
        </div>
      </div>
    </section>
  );
};
