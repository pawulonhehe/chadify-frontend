import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../src/Pages/Home/Home";

import React from "react";

export const Views = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
