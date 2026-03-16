import { createModal } from "./createModal";

export async function loadComponent(selector: string, url: string) {
  const el = document.querySelector(selector);
  const res = await fetch(url);
  if (el !== null) {
    el.innerHTML = await res.text();
    createModal({
      triggerSelector: ".burger-menu",
      closeSelector: ".close-modal",
      modalSelector: "#header .burger-modal",
      activeClass: "show-burger-modal",
      scope: el,
    });
  }
  setActiveNavLink();
}

function setActiveNavLink() {
  const normalize = (path: string) => path.replace(/\/$/, "") || "/";

  const currentPath = normalize(window.location.pathname);

  const links = document.querySelectorAll<HTMLAnchorElement>(".nav-link");

  links.forEach((link) => {
    const linkPath = normalize(new URL(link.href).pathname);

    link.classList.toggle("highlight", linkPath === currentPath);
  });
}
