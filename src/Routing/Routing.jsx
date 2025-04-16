import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Component/Home";
import Series from "../Component/Trending";

const Routing = () => {
  return <>
  <Routes>
    <Route path="/" element={<Home/>}>Home</Route>
    <Route path="/series" element={<Series/>}>Series</Route>
  </Routes>
  </>;
};

export default Routing