import { RiArrowGoBackLine, RiLink, RiPlayCircleFill, RiSkipBackLine } from "@remixicon/react";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PlayingPopular = () => {
  const { state } = useLocation();
  const item = state;
  console.log(item);

  const navigate = useNavigate();
  function BackTo() {
    navigate(`/popular`);
  }

  return (
    // grand parrent
    <div className="bg-black w-full h-screen border  flex ">
      {/* main parent */}
      <div className="banner  mt-22 w-full h-fit border-white flex justify-center">
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
                  <h1 className="bg-blue-400 text-white font-bold p-3 rounded-full">Watch Trailer</h1>
                  {/* <RiPlayCircleFill className="size-25 text-[#6696ff65] hover:text-[#6696ff] transition-colors duration-300 ease cursor-pointer " /> */}
                </span>

                <div className="flex items-center gap-1">
                  <h1 className="text-4xl font-bold text-[#f7ff66] max-md:text-[20px]">
                    {item.title || item.name}
                  </h1>
                  {item.homepage ? (
                    <Link
                      to={item.homepage}
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

        <h4
          onClick={() => BackTo()}
          className="text-white flex bg-blue-400 items-center gap-1 w-fit px-2 rounded-full absolute bottom-20 right-2"
        >
          <RiArrowGoBackLine className="size-4" />
          back
        </h4>
    </div>
  );
};

export default PlayingPopular;
