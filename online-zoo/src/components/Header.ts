import type { User } from "../types/User";
import { createModal } from "../utils/createModal";

type HeaderProps = {
  user: User | null;
};

export const Header = ({ user }: HeaderProps): void => {
  const usernameEl = document.getElementById("user-name");
  if (usernameEl && user) {
    usernameEl.innerHTML = user.name;
  }
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
    elUserLogged.innerHTML = `
          <div>name: ${user.name}</div>
          <div>${user.email}</div>
          <button id="btn-sign-in" class="btn btn--orange">
              Sign&nbspOut
           </button>
`;
  }
};
