// import { Feedbacks } from "./components/Feedbacks";
// import { MeetPets } from "./components/MeetPets";
// import Zoos from "./components/Zoos";
// import { REGISTRATION_INPUTS } from "./constants/registration";
// import { SIGN_IN_INPUTS } from "./constants/signin";
// import { createForm } from "./utils/createForm";
// import ContactUs from "./components/ContactUs";
// import { create_slider } from "./utils/slider/create_slider";

import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Map } from "./components/Map";
import { ContactUs } from "./components/ContactUs";
import { Zoos } from "./components/Zoos";
import type { User } from "./types/User";
import { getUser } from "./utils/getUser";
import SignIn from "./pages/SignIn";

export default function App() {
  const user: User | null = getUser();
  return (
    <div className="project-wrapper">
      <Header user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/zoos" element={<Zoos />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
      <Footer />
    </div>
  );
}

// export default async function App() {
//
//   const page = document.body.className;
//
//   if (page === "page-landing") {
//     try {
//       await MeetPets();
//     } catch (e) {
//       console.error(e);
//     }
//     try {
//       await Feedbacks();
//     } catch (e) {
//       console.error(e);
//     }
//     initPetsSlider();
//     initFeedbackSlider();
//   }
//
//   if (page === "page-zoos") {
//     try {
//       await Zoos();
//     } catch (e) {
//       console.error(e);
//     }
//   }
//
//   if (page === "page-registration") {
//     createForm({
//       formNodeId: "form-registration",
//       title: "Registration",
//       inputs: REGISTRATION_INPUTS,
//       endpointURL:
//         "https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/auth/register",
//     });
//   }
//
//   if (page === "page-sign-in") {
//     createForm({
//       formNodeId: "form-sign-in",
//       title: "Sign In",
//       inputs: SIGN_IN_INPUTS,
//       endpointURL:
//         "https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/auth/login",
//     });
//   }
// }
//
// function initPetsSlider() {
//   const container = document.getElementById("pets-container");
//   if (!container) return;
//
//   const left_arrow = document.getElementById("sldr_left_arr");
//   const right_arrow = document.getElementById("sldr_right_arr");
//   const slider_container = document.getElementById("slider");
//   if (!left_arrow || !right_arrow || !slider_container) return;
//
//   const viewport = container.offsetWidth - 80;
//   create_slider({
//     prev_btn: left_arrow,
//     next_btn: right_arrow,
//     slider: slider_container,
//     viewport,
//     cardSelector: ".animals-card",
//   });
// }
//
// function initFeedbackSlider() {
//   const feedback_container = document.getElementById(
//     "feedback-content-container",
//   );
//   const feedback_slider = document.getElementById("feedback-container");
//   const prev_arrow = document.getElementById("sldr_prev_arrow");
//   const next_arrow = document.getElementById("sldr_next_arrow");
//   if (!feedback_container || !feedback_slider || !prev_arrow || !next_arrow)
//     return;
//
//   create_slider({
//     prev_btn: prev_arrow,
//     next_btn: next_arrow,
//     slider: feedback_slider,
//     viewport: feedback_container.offsetWidth,
//     cardSelector: ".feedback-card",
//   });
// }
