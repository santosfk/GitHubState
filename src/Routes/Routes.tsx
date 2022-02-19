import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../Pages/Home";
import Me from "../Pages/Me";

function RoutesFunc() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="me" element={<Me />} />
    </Routes>
  );
}
export default RoutesFunc;
