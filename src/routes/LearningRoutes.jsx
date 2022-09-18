import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "../views/Homepage";
import NotFound404 from "../views/NotFound404";
import Layout from "../Layout/Layout";
const LearningRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route element={<Layout />}>
        <Route path="/test" element={<h1>test</h1>} />
        <Route path="*" element={<NotFound404 />} />
      </Route>
    </Routes>
  );
};

export default LearningRoutes;
