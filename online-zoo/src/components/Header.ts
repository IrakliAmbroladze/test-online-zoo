import { createModal } from "../utils/createModal";

export const Header = (): void => {
  const usernameEl = document.getElementById("user-name");
  if (!usernameEl) return;
  const username = "Irakli";
  const isLoggedIn = true;
  if (isLoggedIn) {
    usernameEl.innerHTML = username;
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

  if (loggedIn) loggedIn.style.display = isLoggedIn ? "flex" : "none";
  if (notLoggedIn) notLoggedIn.style.display = isLoggedIn ? "none" : "flex";
};
