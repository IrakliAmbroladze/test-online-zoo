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
import Registration from "./pages/Registration";

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
        <Route path="/registration" element={<Registration />} />
      </Routes>
      <Footer />
    </div>
  );
}
