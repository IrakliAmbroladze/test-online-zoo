import { createRoot } from "react-dom/client";
import "./styles/scss/main.scss";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { FavouritesProvider } from "./context/FavoritesProvider";

const root = document.getElementById("root");
if (!root) throw new Error("Root element not found");

createRoot(root).render(
  <StrictMode>
    <FavouritesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FavouritesProvider>
  </StrictMode>,
);
