import React, { useEffect, useState } from "react";
import {
  RiGlobalLine,
  RiLink,
  RiPlayCircleFill,
  RiShakeHandsFill,
  RiTvLine,
} from "@remixicon/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BannerBuffering from "../BannerBuffering";
import axios from "../Axios";
import { useDispatch } from "react-redux";
import movieAction from "../Actions/MovieAction";

const TrendingPreviewPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const item = state || {}; // fallback in case nothing is passed
  const dispatch = useDispatch()

  const [detail, setDetails] = useState([]);
  // const [getRecomendation, setRecomendation] = useState([])

  async function TrendingDetails() {
    const TrendingDetails = await axios.get(`movie/${item.id}`);
    setDetails(TrendingDetails.data);
  }
  console.log("State ", detail);

  // function Recomendation(){
  //   const trendingRecomendation = axios.get(`movie/${item.id}/recommendations`)
  //   setRecomendation(trendingRecomendation)
  // }

  // console.log("Recom ",getRecomendation);

  useEffect(() => {
    TrendingDetails();
    // Recomendation()
    dispatch(movieAction(item.id))
  }, []);

  return (
    <>
      <div
        className="w-full h-screen pb-15 px-4 pt-4 border-white space-y-2 p-4 "
        style={{
          backgroundImage: `linear-gradient(to top, #000000 , rgba(0,0,0,0.10), rgba(0, 0, 0, 0)), url(https://image.tmdb.org/t/p/original/${
            item.backdrop_path || item.profile_path
          })`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {item ? (
          <div className="banner  mt-20 border-white flex justify-center">
            <div
              className="banner shadow-2xl border  text-[#858585]  w-250 rounded-2xl h-120 bg-cover bg-center max-lg:w-150 max-lg:h-90 max-md:w-150 max-md:h-80 max-sm:w-90 max-sm:h-55"
              style={{
                backgroundImage: `linear-gradient(to top, #000000 , rgba(0,0,0,0.10), rgba(0, 0, 0, 0)), url(https://image.tmdb.org/t/p/original/${
                  item.backdrop_path || item.profile_path
                })`,
              }}
            >
              <div className="w-full h-full flex gap-2 flex-col justify-end  border-white p-4 max-md:text-[10px]">
                <span className="bottom border-white  w-full h-full flex items-center justify-center text-[#f7ff66] max-md:hidden ">
                  <h1 className="bg-[#ffffff14] border border-[#a1a1a1] backdrop-blur-md cursor-pointer hover:bg-[#ffffff60] transition-colors duration-300 ease-in-out text-white font-bold p-3 rounded-full">Watch Trailer</h1>
                  {/* <RiPlayCircleFill className="size-25 text-[#6696ff65] hover:text-[#6696ff] transition-colors duration-300 ease cursor-pointer " /> */}
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
          {/* <h1>Movie: {item.title || item.name}</h1> */}
          <h1>Description: {item.overview}</h1>
          <h1 className="flex gap-1 w-fit items-center  border-white">
            <RiTvLine className="w-5 text-[#f7ff66]" />
            {item.media_type}
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
      </div>
    </>
  );
};

export default TrendingPreviewPage;
