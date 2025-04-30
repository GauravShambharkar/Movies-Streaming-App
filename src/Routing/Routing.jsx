import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Component/Home";
import Trending from "../Component/Trending";
import Popular from "../Component/Popular";
import Movies from "../Component/Movies";
import TvShows from "../Component/Tvshow";
import TrendingPreviewPage from "../Component/Preview/TrendingPreviewPage";
import PopularPreviewPage from "../Component/Preview/PopularPreviewPage";
import MoviePreviewPage from "../Component/Preview/MoviePreviewPage";
import TvShowsPreviewPage from "../Component/Preview/TvShowsPreviewPage";
import PlayingMovies from "../Component/Playing/PlayingMovies";
import PlayingPopular from "../Component/Playing/PlayingPopular";



const Routing = () => {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/trending" element={<Trending />}>
          Series
        </Route>
        <Route path="/popular" element={<Popular />}>
          Popular
        </Route>
        <Route path="/movies" element={<Movies />}>
          Movies
        </Route>
        <Route path="/tvshow" element={<TvShows />}>
          Tvshows
        </Route>
        <Route
          path="/trending/:slug"
          element={<TrendingPreviewPage />}
        >
          watch Trending
        </Route>
        <Route
          path="/popular/:slug"
          element={<PopularPreviewPage/>}
        >
          watch Popular
        </Route>
        <Route
          path="/movies/:slug"
          element={<MoviePreviewPage/>}
        >
          watch Movies
        </Route>
        <Route
          path="/tvShow/:slug"
          element={<TvShowsPreviewPage/>}
        >
          watch TvShows
        </Route>
        <Route path='movies/playing/:slug' element={<PlayingMovies/>}/>
        <Route path='popular/playing/:slug' element={<PlayingPopular/>}/>
        <Route path='tvShow/playing/:slug' element={<PlayingPopular/>}/>
      </Routes>
    </>
  );
};

export default Routing;
