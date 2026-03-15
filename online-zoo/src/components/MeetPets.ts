import { fetchPets } from "../lib/fetchPets";
import type { Pet } from "../types/Pet";
import { PETS } from "../types/PETS";

export const MeetPets = async (): Promise<void> => {
  const container = document.getElementById("slider");
  if (!container) return;

  container.innerHTML = `
    <div class="pets-loader">
      Loading pets...
    </div>
  `;

  try {
    const pets: Pet[] = await fetchPets();
    console.log(pets);

    container.innerHTML = "";

    pets.forEach((pet) => {
      const animal =
        Object.values(PETS).find((petName) =>
          pet.commonName.toLowerCase().includes(petName),
        ) || "koala";

      const element = `
    <div class="animals-card">
      <label>${pet.commonName}</label>
      <div class="cover">
        <img src="./assets/images/${animal}.png" alt="${animal}" />
      </div>
      <div class="title">${pet.commonName}</div>
      <p>${pet.description}</p>
      <button class="btn btn--pure-text-orange">
        <span>view live cam</span>
        <img src="./assets/icons/arrow.svg" alt="arrow" />
      </button>
    </div>
  `;

      container.insertAdjacentHTML("beforeend", element);
    });
  } catch (err) {
    if (err instanceof Error) {
      console.error("Caught an Error object:", err.message);
    } else {
      console.error("Caught an unknown error type:", err);
    }

    container.innerHTML = `
      <div class="pets-error">
        <p>Something went wrong. Please, refresh the page</p>
      </div>
    `;
  }
};
