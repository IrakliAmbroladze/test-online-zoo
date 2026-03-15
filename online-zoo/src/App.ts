import { Feedbacks } from "./components/Feedbacks";
import { Header } from "./components/Header";
import { MeetPets } from "./components/MeetPets";
import { REGISTRATION_INPUTS } from "./constants/registration";
import { createForm } from "./utils/createForm";
// import { user } from "./constants/user";
import { create_slider } from "./utils/slider/create_slider";

export default async function App() {
  Header({ user: null });

  const page = document.body.className;

  if (page === "page-landing") {
    try {
      await MeetPets();
    } catch (e) {
      console.error(e);
    }
    try {
      await Feedbacks();
    } catch (e) {
      console.error(e);
    }
    initPetsSlider();
    initFeedbackSlider();
  }

  if (page === "page-registration") {
    createForm({
      formNodeId: "form-registration",
      title: "Registration",
      inputs: REGISTRATION_INPUTS,
    });
  }
}

function initPetsSlider() {
  const container = document.getElementById("pets-container");
  if (!container) return;

  const left_arrow = document.getElementById("sldr_left_arr");
  const right_arrow = document.getElementById("sldr_right_arr");
  const slider_container = document.getElementById("slider");
  if (!left_arrow || !right_arrow || !slider_container) return;

  const viewport = container.offsetWidth - 80;
  create_slider({
    prev_btn: left_arrow,
    next_btn: right_arrow,
    slider: slider_container,
    viewport,
    cardSelector: ".animals-card",
  });
}

function initFeedbackSlider() {
  const feedback_container = document.getElementById(
    "feedback-content-container",
  );
  const feedback_slider = document.getElementById("feedback-container");
  const prev_arrow = document.getElementById("sldr_prev_arrow");
  const next_arrow = document.getElementById("sldr_next_arrow");
  if (!feedback_container || !feedback_slider || !prev_arrow || !next_arrow)
    return;

  create_slider({
    prev_btn: prev_arrow,
    next_btn: next_arrow,
    slider: feedback_slider,
    viewport: feedback_container.offsetWidth,
    cardSelector: ".feedback-card",
  });
}
