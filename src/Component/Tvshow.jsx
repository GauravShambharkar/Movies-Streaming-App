import {
  RiGlobalLine,
  RiPlayCircleFill,
  RiShakeHandsFill,
  RiTvLine,
} from "@remixicon/react";
import axios from "./Axios";
import React, { useEffect, useState } from "react";
import CardBuffering from "./CardBuffering";
import { useNavigate } from "react-router-dom";
import slugify from "slugify";
import BannerBuffering from "./BannerBuffering";
import { useDispatch } from "react-redux";
import movieAction from "./Actions/MovieAction";
import TvShowAction from "./Actions/TvShowAction";

const TvShows = () => {
  const [showTvBanner, setShowTvBanner] = useState(null);
  const [TvShows, setTvShows] = useState([]);
  const [category, setCategory] = useState("popular");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  async function renderTvShowsBanner() {
    try {
      const showdata = await axios.get(`/tv/airing_today`);
      console.log(showdata.data.results);
      const randomeTvShowsBanner =
        showdata.data.results[
          (Math.random() * showdata.data.results.length).toFixed()
        ];
      setShowTvBanner(randomeTvShowsBanner);
    } catch (e) {
      console.log("Error", e);
    }
  }
  console.log("TvShows", showTvBanner);
  async function renderTvShows() {
    try {
      const showTv = await axios.get(`/tv/${category}`);
      setTvShows(showTv.data.results);
      console.log(showTv.data.results);
    } catch (e) {
      console.log("Error", e);
    }
  }

  useEffect(() => {
    renderTvShowsBanner();
    renderTvShows();
    window.scrollTo(0, 0);
    return () => {
      console.clear();
    };
  }, [category]);

  useEffect(() => {
    if (TvShows) {
      dispatch(TvShowAction(TvShows.id));
    }
  }, [TvShows]);

  return (
    <div className="w-full pb-15 px-4 pt-4  backdrop-blur-sm py-2 flex flex-col border-white justify-center items-center gap-8 ">
      {/* Trending banner */}
      {showTvBanner ? (
        <div
          className="banner  text-white border-white w-250 rounded-2xl h-120 mt-20 bg-cover bg-center max-lg:w-150 max-lg:h-90 max-md:w-150 max-md:h-80 max-sm:w-90 max-sm:h-55"
          style={{
            backgroundImage: `linear-gradient(to top, #000000 , rgba(0,0,0,0.10), rgba(0, 0, 0, 0)), url(https://image.tmdb.org/t/p/original/${
              showTvBanner.backdrop_path || showTvBanner.profile_path
            })`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="w-full h-full flex gap-2 flex-col justify-end  border-white p-4 max-md:text-[10px]">
            {/* play button */}
            <span className="bottom border-white  w-full h-full flex items-end justify-center text-[#f7ff66] max-md:hidden ">
                <RiPlayCircleFill className="size-25 text-[#ffffff1e] hover:text-[#6696ff] rounded-full border backdrop-blur-2xl transition-colors duration-300 ease cursor-pointer " />
            </span>


            <h1 className="text-4xl font-bold text-[#f7ff66] max-md:text-[14px]">
              {showTvBanner.name ||
                showTvBanner.title ||
                showTvBanner.original_name ||
                showTvBanner.original_title}
            </h1>
            <h1>{showTvBanner.overview.slice(0, 150)}...</h1>
            <div className="flex gap-2">
              <h1 className="flex gap-1 items-center w-fit  border-white">
                {<RiTvLine className="w-5 text-[#f7ff66]" />}Genre:{" "}
                {showTvBanner.media_type}
              </h1>
              <h1 className=" w-fit  items-center gap-1 flex border-white">
                {<RiGlobalLine className="w-5 text-[#f7ff66]" />}Language:{" "}
                {showTvBanner.original_language}
              </h1>
              <span className=" gap-1 flex items-center border-white">
                {<RiShakeHandsFill className="w-5 text-[#f7ff66]" />}Rating:{" "}
                {showTvBanner.vote_average || "?"}/10
              </span>
            </div>
            <button className="px-2 py-1 w-fit rounded-2xl text-[white] bg-[#7499ffca] backdrop-blur-2xl">
              Watch Trailer
            </button>
          </div>
        </div>
      ) : (
        <BannerBuffering />
      )}

      <div className="  border-white">
        <h2 className="text-[#f7ff66] lg:text-5xl text-3xl font-bold text-center">
          Popular Now
        </h2>
        <p className="text-[#bdbdbd] text-center mt-2 max-w-2xl">
          Discover what’s hot and currently popular across your favorite
          streaming platforms. Hand-picked and updated regularly.
        </p>
      </div>

      {/* dropDown category */}
      <div
        onChange={(e) => setCategory(e.target.value)}
        className="container w-full h-fit  px-4 flex justify-end border-white"
      >
        <select
          id="categorySelect"
          className="bg-[#1c1c1c]  max-sm:w-fit py-1 text-[#70a0ff] text-base rounded-md focus:ring-[#7499ff] focus:border-[#7499ff] block p-3 w-full sm:w-72 transition duration-200 ease-in-out shadow-md hover:border-[#7499ff] hover:bg-[#232323] cursor-pointer"
        >
          <option value="" selected className="text-[#8a8a8a]">
            Filter
          </option>
          <option value="airing_today" selected>
            Airing Today
          </option>
          <option value="top_rated">Top Rated</option>
          <option value="popular">Popular</option>
          <option value="on_the_air">On The Air</option>
        </select>
      </div>

      {/* cards */}
      <div className="grid  p-4 border-white md:grid-cols-4 sm:grid-cols-2 gap-4 w-full max-w-7xl">
        {TvShows.length > 0 ? (
          TvShows.map((item, index) => (
            <div
              key={index}
              className="bg-[#1e1e1e]   justify-between border-[#ffffff] p-4 flex flex-col gap-2 rounded-2xl shadow-lg hover:scale-101 transition-transform duration-200 "
            >
              <div className="top">
                <img
                  className="rounded-md"
                  src={`https://image.tmdb.org/t/p/original/${
                    item.backdrop_path || item.profile_path
                  }`}
                  alt=""
                />
                <h3 className="text-xl text-white font-semibold">
                  {item.title ||
                    item.name ||
                    item.original_title ||
                    item.original_name}
                </h3>
                <p className="text-sm text-[#9ca3af]">
                  {item.overview.slice(0, 150)}...
                </p>
                {/* <h5 className="text-[#f7ff66]" >Type: {item.media_type}</h5> */}
              </div>
              {/* bottom card content*/}
              <div className="bottom flex  h-fit items-center border-white justify-between ">
                <span className="text-[#668fff] ">
                  Popularity: {item.popularity > 100 ? "High" : "Very Low"}
                </span>
                <span
                  onClick={() => {
                    navigate(`/tvShow/${slugify(item.name || item.title)}`, {
                      state: item,
                    });
                  }}
                  className="bottom text-[#f7ff66]  cursor-pointer"
                >
                  {/* {item.status} Watch Now */}
                  <RiPlayCircleFill className="size-15" />
                </span>
              </div>
            </div>
          ))
        ) : (
          <CardBuffering />
        )}
      </div>
    </div>
  );
};

export default TvShows;
