import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../Pages/Home";
import Me from "../Pages/Me";
import MyPacks from "../Pages/myPacks";

function RoutesFunc() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="me" element={<Me />} />
      <Route path="me" element={<MyPacks />} />
    </Routes>
  );
}
export default RoutesFunc;
