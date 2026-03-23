import type { User } from "../types/User";
import { createModal } from "../utils/createModal";

type HeaderProps = {
  user: User | null;
};
export const Header = ({ user }: HeaderProps): void => {
  createModal({
    triggerSelector: ".user",
    modalSelector: "#user-modal",
    activeClass: "show-user-modal",
  });
  const loggedIn = document.querySelector<HTMLElement>(
    "#user-modal .logged-in",
  );
  const notLoggedIn = document.querySelector<HTMLElement>(
    "#user-modal .non-logged-in",
  );

  if (loggedIn) loggedIn.style.display = user ? "flex" : "none";
  if (notLoggedIn) notLoggedIn.style.display = user ? "none" : "flex";
  const elUserLogged = document.querySelector(".logged-in");
  if (elUserLogged && user) {
    const elBtn = document.createElement("button");
    elBtn.addEventListener("click", () => {
      console.log("clicked on btn");
      localStorage.clear();
      window.location.href = "/sign-in/";
    });
  }
};
