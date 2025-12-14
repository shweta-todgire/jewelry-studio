import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Rings from "./components/Rings";
import Necklaces from "./components/Necklaces";
import Bracelets from "./components/Bracelets";
import Earrings from "./components/Earrings";

function App() {
  return (
    <Routes>
      {/* Home Page */}
      <Route path="/" element={<Hero />} />

      {/* Category Pages */}
      <Route path="/category/rings" element={<Rings />} />
      <Route path="/category/necklaces" element={<Necklaces />} />
      <Route path="/category/bracelets" element={<Bracelets />} />
      <Route path="/category/earrings" element={<Earrings />} />
    </Routes>
  );
}

export default App;
