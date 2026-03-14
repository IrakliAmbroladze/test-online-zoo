import { Header } from "./components/Header";
import { user } from "./constants/user";
import { create_slider } from "./utils/slider/create_slider";

export default function App() {
  Header({ user });
  const container = document.getElementById("pets-container");
  if (!container) return;
  const left_arrow = document.getElementById("sldr_left_arr");
  const right_arrow = document.getElementById("sldr_right_arr");
  const slider_container = document.getElementById("slider");
  const viewport = container.offsetWidth - 80; //deducting padding

  create_slider({
    prev_btn: left_arrow,
    next_btn: right_arrow,
    slider: slider_container,
    viewport,
    cardSelector: ".animals-card",
  });
}
