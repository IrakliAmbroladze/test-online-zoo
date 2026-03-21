import { createRoot } from "react-dom/client";
import "../style/scss/main.scss";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
// import App from "./App";
// import { loadComponent } from "./utils/loadComponent";

// async function main() {
//   try {
//     await loadComponent("#header", "/components/header.html");
//     await loadComponent("#footer", "/components/footer.html");
//     await App();
//   } catch (err) {
//     if (err instanceof Error) {
//       console.error("Caught an Error object:", err.message);
//     } else {
//       console.error("Caught an unknown error type:", err);
//     }
//   }
// }

const root = document.getElementById("root");
if (!root) throw new Error("Root element not found");

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
