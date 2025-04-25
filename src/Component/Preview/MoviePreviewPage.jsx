import React, { useEffect, useState } from "react";
import {
  RiArrowDownLine,
  RiArrowRightDownLine,
  RiGlobalLine,
  RiLink,
  RiPlayCircleFill,
  RiShakeHandsFill,
  RiTvLine,
} from "@remixicon/react";
import { Link, useLocation } from "react-router-dom";
import BannerBuffering from "../BannerBuffering";
import axios from "../Axios";
import CardBuffering from "../CardBuffering";

const MoviePreviewPage = () => {
  const { state } = useLocation();
  const item = state || {}; // fallback in case nothing is passed

  const [detail, setDetails] = useState([]);
  const [getRecomendation, setRecomendation] = useState([]);

  async function MovieDetails() {
    const MovieDetails = await axios.get(`movie/${item.id}`);
    setDetails(MovieDetails.data);
  }
  console.log("State ", detail);

  async function recommendations() {
    const recommendations = await axios.get(`movie/${item.id}/recommendations`);
    setRecomendation(recommendations.data.results);
  }
  console.log("recomendation", getRecomendation);

  useEffect(() => {
    MovieDetails();
    recommendations();
  }, []);

  return (
    <>
      <div className="w-full border-white p-4 bg-black">
        {item ? (
          <div className="banner mt-17 flex justify-center">
            <div
              className="banner text-white  w-250 rounded-2xl h-120 bg-cover bg-center max-lg:w-150 max-lg:h-90 max-md:w-150 max-md:h-80 max-sm:w-90 max-sm:h-55"
              style={{
                backgroundImage: `linear-gradient(to top, #000000 , rgba(0,0,0,0.10), rgba(0, 0, 0, 0)), url(https://image.tmdb.org/t/p/original/${
                  item.backdrop_path || item.profile_path
                })`,
              }}
            >
              <div className="w-full h-full flex gap-2 flex-col justify-end  border-white p-4 max-md:text-[10px]">
                <span className="bottom border-white  w-full h-full flex items-center justify-center text-[#f7ff66] max-md:hidden ">
                  <RiPlayCircleFill className="size-25 text-[#6696ff65] hover:text-[#6696ff] transition-colors duration-300 ease cursor-pointer " />
                </span>

                <div className="flex items-center gap-1">
                  <h1 className="text-4xl font-bold text-[#f7ff66] max-md:text-[20px]">
                    {item.title || item.name}
                  </h1>
                  {detail.homepage ? (
                    <Link
                      to={detail.homepage}
                      target="_blank"
                      className="w-fit"
                    >
                      <RiLink className="text-[#52a0ff] size-5" />
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <BannerBuffering />
        )}

        <div className="container mx-auto text-white space-y-2 w-[100%] ">
          <h1>Movie: {item.title || item.name}</h1>
          <h1>Discription: {item.overview}</h1>
          <h1 className="flex gap-1 w-fit items-center  border-white">
            <RiTvLine className="w-5 text-[#f7ff66]" /> Genre: {item.media_type}
          </h1>
          <h1 className=" w-fit  gap-1 flex items-center border-white">
            <RiGlobalLine className="w-5 text-[#f7ff66]" /> Language:{" "}
            {item.original_language}
          </h1>
          <span className=" gap-1 flex items-center border-white">
            <RiShakeHandsFill className="w-5 text-[#f7ff66]" /> Rating:{" "}
            {parseInt(item.vote_average).toFixed(1)}/10
          </span>
        </div>
        
        {/* cards */}
        

        <h1 className="text-black px-2 font-medium w-fit bg-[yellow] rounded-full text-center mt-2 flex">Similar <RiArrowRightDownLine/></h1>
        <div className="grid p-4 mx-auto border-white md:grid-cols-4 sm:grid-cols-2 gap-6 w-full max-w-7xl">
          {getRecomendation.map((item, index) => (
            <div
              key={index}
              className="bg-[#1e1e1e] justify-between border-[#ffffff] p-4 flex flex-col gap-2 rounded-2xl shadow-lg hover:scale-101 transition-transform duration-200 "
            >
              <div className="top">
                {item.backdrop_path ? <img
                  className="rounded-md"
                  src={`https://image.tmdb.org/t/p/original/${
                    item.backdrop_path || item.profile_path
                  }`}
                  alt=""
                /> : <div className=" w-full h-40 flex  border-white overflow-hidden"><img className="w-80 mix-blend-exclusion flex mx-auto" src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3BqMjA3aGZpZTlhajc3YXE3b24yc3M4ZHZkM2t6dWpndW9iNGNqcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ycfHiJV6WZnQDFjSWH/giphy.gif"/></div>}
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
              <div className="bottom flex h-fit items-center border-white justify-between ">
                <span className="text-[#668fff] ">
                  Popularity: {item.popularity > 100 ? "High" : "Very Low"}
                </span>
                <span
                  onClick={() => {
                    navigate(`/movies/${slugify(item.name || item.title)}`, {
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
          ))}
        </div>

      </div>
    </>
  );
};

export default MoviePreviewPage;
