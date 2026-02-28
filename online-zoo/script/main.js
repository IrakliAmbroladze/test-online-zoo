async function loadComponent(selector, url) {
  const el = document.querySelector(selector);
  const res = await fetch(url);
  el.innerHTML = await res.text();

  el.querySelector(".burger-menu").addEventListener("click", showMenu);
}

function showMenu() {
  const modal = document.querySelector(".burger-modal");
  if (modal) {
    modal.classList.toggle("show-burger-modal");
  }
}

loadComponent("#header", "/components/header.html");
