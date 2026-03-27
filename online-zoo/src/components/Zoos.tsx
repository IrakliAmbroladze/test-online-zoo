import { useEffect, useState } from "react";
import { Cameras } from "./Cameras";
import { useSearchParams } from "react-router-dom";
import { PETS } from "../types/PETS";
import { fetchPetFullInfo } from "../lib/fetchPetFullInfo";
import type { PetFullInfo } from "../types/PetFullInfo";
import type { Status } from "../types/Status";

export const Zoos = () => {
  const [shrinked, setShrinked] = useState(true);
  const [searchParams] = useSearchParams();
  const [pet, setPet] = useState<PetFullInfo>();
  const [status, setStatus] = useState<Status>("loading");
  const petId: number = Number(searchParams.get("petId")) || 1;
  useEffect(() => {
    fetchPetFullInfo(petId)
      .then((data) => {
        setPet(data);
        setStatus("success");
      })
      .catch((err) => {
        console.error(err instanceof Error ? err.message : err);
        setStatus("error");
      });
  }, [petId]);

  if (status === "loading") return <div className="loader">Loading pet...</div>;
  return (
    <div className="page-zoos">
      <section className="cameras-container">
        <div id="cameras" className={`cameras ${shrinked && "shrinked"}`}>
          <div
            className="double_arrow"
            id="double_arrow"
            onClick={() => setShrinked((prev) => !prev)}
          >
            <img src="/assets/icons/double_arrow.svg" alt="double_arrow" />
          </div>
          <Cameras />
        </div>
      </section>

      <main className="main">
        <div className="container">
          {status === "error" ? (
            <p>Something went wrong. Please, refresh the page</p>
          ) : (
            <div className="title-container">
              <h1 className="title">Live {PETS[petId]} cams</h1>
              <button className="btn btn--orange">
                donate now <img src="/assets/icons/arrow.svg" alt="arrow" />
              </button>
            </div>
          )}
        </div>
      </main>

      <footer id="footer" className="footer"></footer>
      <script type="module" src="/src/main.tsx"></script>
    </div>
  );
};
