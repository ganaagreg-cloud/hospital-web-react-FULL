import { Routes, Route } from "react-router-dom";
import Home from "../pages/homepage";
import Services from "../pages/services";
import About from "../pages/about";
import Doctors from "../pages/doctors";
import Blog from "../pages/blog";

export default function AppRoutes({ onOpenAppointment }) {
  return (
    <Routes>
      <Route path="/" element={<Home onOpenAppointment={onOpenAppointment} />} />
      <Route path="/services" element={<Services onOpenAppointment={onOpenAppointment} />} />
      <Route path="/about" element={<About />} />
      <Route path="/doctors" element={<Doctors onOpenAppointment={onOpenAppointment} />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}