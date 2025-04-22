import React from "react";
import {
  RiGlobalLine,
  RiPlayCircleFill,
  RiShakeHandsFill,
  RiTvLine,
} from "@remixicon/react";
import { useLocation } from "react-router-dom";

const TvShowsPreviewPage = () => {
  const { state } = useLocation();
  const item = state || {}; // fallback in case nothing is passed

  return (
    <>
      <div className="w-full h-screen border border-white p-4 bg-black">
        <div className="banner mt-17 flex justify-center">
          <div className="banner  text-white  w-250 rounded-2xl h-120 bg-cover bg-center max-lg:w-150 max-lg:h-90 max-md:w-90 max-md:h-85"
            style={{
              backgroundImage: `linear-gradient(to top, #000000 , rgba(0,0,0,0.10), rgba(0, 0, 0, 0)), url(https://image.tmdb.org/t/p/original/${
                item.backdrop_path || item.profile_path
              })`,
            }}>
            <div className="w-full h-full flex gap-2 flex-col justify-end border border-white p-4 max-md:text-[10px]">
              <span className="bottom border-white border w-full h-full flex items-center justify-center text-[#f7ff66] max-md:hidden ">
                <RiPlayCircleFill className="size-25 text-[#6696ff65] hover:text-[#6696ff] transition-colors duration-300 ease cursor-pointer " />
              </span>

              <h1 className="text-4xl font-bold text-[#f7ff66] max-md:text-[20px]">
                {item.title || item.name}
              </h1>

              <h1>{item.overview}</h1>
              <div className="flex gap-2">
                <h1 className="flex gap-1 w-fit items-center border border-white">
                  <RiTvLine className="w-5 text-[#f7ff66]" /> Genre:{" "}
                  {item.media_type}
                </h1>
                <h1 className=" w-fit border gap-1 flex items-center border-white">
                  <RiGlobalLine className="w-5 text-[#f7ff66]" /> Language:{" "}
                  {item.original_language}
                </h1>
                <span className="border gap-1 flex items-center border-white">
                  <RiShakeHandsFill className="w-5 text-[#f7ff66]" /> Rating:{" "}
                  {item.vote_average}/10
                </span>
              </div>

              <button className="px-2 py-1 w-fit rounded-2xl text-[white] bg-[#7499ffca] backdrop-blur-2xl">
                Watch Trailer
              </button>
            </div>
          </div>
        </div>
      <div className="text-white border">text contents</div>
      </div>
    </>
);};

export default TvShowsPreviewPage;
