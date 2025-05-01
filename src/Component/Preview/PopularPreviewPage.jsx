import React, { useEffect, useState } from "react";
import {
  RiArrowRightDownLine,
  RiGlobalLine,
  RiLink,
  RiPlayCircleFill,
  RiShakeHandsFill,
  RiTvLine,
} from "@remixicon/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BannerBuffering from "../BannerBuffering";
import { useDispatch, useSelector } from "react-redux";
import movieAction from "../Actions/MovieAction";
import CardBuffering from "../CardBuffering";
import slugify from "slugify";

const PopularPreviewPage = () => {
  const { state } = useLocation();
  const [getRecommendation, setRecommendation] = useState([]);

  const item = state;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { info } = useSelector((state) => state.movieReducer);

  async function recommendation() {
    if (info) {
      await setRecommendation(info.movieRecommendation);
    }
  }
  useEffect(() => {
    recommendation();
    dispatch(movieAction(item.id));
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (info) {
      recommendation();
    }
  }, [info]);

  return (
    <>
      <div className="w-full pb-15 px-4 pt-4 border-white p-4 bg-black">
        {item ? (
          <div className="banner mt-20 flex justify-center">
            <div
              className="banner  text-white  w-250 rounded-2xl h-120 bg-cover bg-center max-lg:w-150 max-lg:h-90 max-md:w-150 max-md:h-80 max-sm:w-90 max-sm:h-55"
              style={{
                backgroundImage: `linear-gradient(to top, #000000 , rgba(0,0,0,0.10), rgba(0, 0, 0, 0)), url(https://image.tmdb.org/t/p/original/${
                  item.backdrop_path || item.profile_path
                })`,
              }}
            >
              <div className="w-full h-full flex gap-2 flex-col justify-end  border-white p-4 max-md:text-[10px]">
                <span className="bottom border-white  w-full h-full flex items-center justify-center text-[#f7ff66] max-md:hidden ">
                  <h1 className="bg-blue-400 text-white font-bold p-3 rounded-full">
                    Watch Trailer
                  </h1>
                  {/* <RiPlayCircleFill className="size-25 text-[#6696ff65] hover:text-[#6696ff] transition-colors duration-300 ease cursor-pointer " /> */}
                </span>

                <div className="flex items-center gap-1">
                  <h1 className="text-4xl font-bold text-[#f7ff66] max-md:text-[20px]">
                    {item.title || item.name}
                  </h1>
                  {info? (
                    <Link
                      to={info.details.homepage}
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

        <div className="container  mx-auto text-white space-y-2 w-[100%] ">
          {/* <h1>Movie: {item.title || item.name}</h1> */}
          <h1>Description: {item.overview}</h1>
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

        <div className="grid p-4 mx-auto border-white md:grid-cols-4 sm:grid-cols-2 gap-6 w-full max-w-7xl">
          {getRecommendation ? (
            getRecommendation.map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-[#1e1e1e]  relative justify-between border-[#ffffff] p-4 flex flex-col gap-2 rounded-2xl shadow-lg hover:scale-101 transition-transform duration-200 "
                >
                  <h1 className="text-black border-b absolute text-[14px] items-center top-0 px-2 font-medium w-fit bg-[#f7ff66] backdrop-blur-2xl rounded-full text-center  mt-2 flex">
                    Recommendation
                    <RiArrowRightDownLine className="size-5 " />
                  </h1>

                  <div className="top">
                    {item.backdrop_path ? (
                      <img
                        className="rounded-md"
                        src={`https://image.tmdb.org/t/p/original/${
                          item.backdrop_path || item.profile_path
                        }`}
                        alt=""
                      />
                    ) : (
                      <div className=" w-full h-40 flex  border-white overflow-hidden">
                        <img
                          className="w-80 mix-blend-exclusion flex mx-auto"
                          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3BqMjA3aGZpZTlhajc3YXE3b24yc3M4ZHZkM2t6dWpndW9iNGNqcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ycfHiJV6WZnQDFjSWH/giphy.gif"
                        />
                      </div>
                    )}
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
                        navigate(
                          `/popular/playing/${slugify(
                            item.name || item.title
                          )}`,
                          {
                            state: item,
                          }
                        ),
                          (<a href="#" />);
                      }}
                      className="bottom text-[#f7ff66]  cursor-pointer"
                    >
                      {/* {item.status} Watch Now */}
                      <RiPlayCircleFill className="size-15" />
                    </span>
                  </div>
                </div>
              );
            })
          ) : (
            <CardBuffering />
          )}
        </div>
      </div>
    </>
  );
};

export default PopularPreviewPage;
