import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "../pages/contact";
import Portfolio from "../pages/portfolio";
import Home from "../pages/home";
import About from "../pages/about";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default PageRoutes;
