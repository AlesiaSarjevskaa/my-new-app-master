import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Game from "./Game/Game";

import React from "react";

export default function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </HashRouter>
  );
}
