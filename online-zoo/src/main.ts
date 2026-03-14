import "../style/scss/main.scss";
import App from "./App";
import { loadComponent } from "./utils/loadComponent";

async function main() {
  try {
    await loadComponent("#header", "/components/header.html");
    await loadComponent("#footer", "/components/footer.html");
    App();
  } catch (err) {
    if (err instanceof Error) {
      console.error("Caught an Error object:", err.message);
    } else {
      console.error("Caught an unknown error type:", err);
    }
  }
}
main();
