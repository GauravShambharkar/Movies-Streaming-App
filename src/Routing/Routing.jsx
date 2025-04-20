import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Component/Home";
import Trending from "../Component/Trending";
import Popular from "../Component/Popular";
import Movies from "../Component/Movies";
import TvShows from "../Component/Tvshow";
import TrendingPreviewPage from "../Component/TrendingPreviewPage";

const Routing = () => {
  return <>
  <Routes>
    <Route path="/" element={<Home/>}>Home</Route>
    <Route path="/trending" element={<Trending/>}>Series</Route>
    <Route path="/popular" element={<Popular/>}>Popular</Route>
    <Route path="/movies" element={<Movies/>}>Movies</Route>
    <Route path="/tvshow" element={<TvShows/>}>Tvshows</Route>
    <Route path="/trending/watch_trending" element={<TrendingPreviewPage/>}>watch Trending</Route>
  </Routes>
  </>;
};

export default Routing