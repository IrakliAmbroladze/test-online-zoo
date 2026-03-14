import App from "./App";
import { Header } from "./components/Header";
import { create_slider } from "./utils/slider/create_slider";

async function loadComponent(selector: string, url: string) {
  const el = document.querySelector(selector);
  const res = await fetch(url);
  if (el !== null) {
    el.innerHTML = await res.text();
    el.querySelector(".burger-menu")?.addEventListener("click", toggleMenu);
    el.querySelector(".close-modal")?.addEventListener("click", toggleMenu);
  }
  setActiveNavLink();
}

function toggleMenu() {
  const modal = document.querySelector("#header .burger-modal");
  modal?.classList.toggle("show-burger-modal");
}
function setActiveNavLink() {
  const normalize = (path: string) => path.replace(/\/$/, "") || "/";

  const currentPath = normalize(window.location.pathname);

  const links: NodeListOf<Element> = document.querySelectorAll(".nav-link");

  links.forEach((link) => {
    const linkPath = normalize(new URL(link.href).pathname);

    link.classList.toggle("highlight", linkPath === currentPath);
  });
}

async function init() {
  await loadComponent("#header", "/components/header.html");
  await loadComponent("#footer", "/components/footer.html");
  Header();
}
init();
const left_arrow = document.getElementById("sldr_left_arr");
const right_arrow = document.getElementById("sldr_right_arr");
const slider_container = document.getElementById("slider");

const container = document.getElementById("pets-container");
const viewport = container.offsetWidth - 80; //deducting padding
create_slider({
  prev_btn: left_arrow,
  next_btn: right_arrow,
  slider: slider_container,
  viewport,
  cardSelector: ".animals-card",
});

App();
