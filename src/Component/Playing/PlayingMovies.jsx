import { RiArrowGoBackLine, RiSkipBackLine } from "@remixicon/react";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PlayingMovies = () => {
  const { state } = useLocation();
  const item = state;
  console.log(item);

  const navigate = useNavigate();
  function BackTo() {
    navigate(`/movies`);
  }


  return (
    // grand parrent
    <div className="bg-black w-full h-screen  flex ">
      {/* main parent */}
      <div className="mt-17 border border-white w-full relative px-4">
        <h1 className="text-white">{item.original_title}</h1>
        <h4
          onClick={() => BackTo()}
          className="text-white flex bg-blue-400 items-center gap-1 w-fit px-2 rounded-full absolute bottom-20 right-2"
        >
          <RiArrowGoBackLine className="size-4" />
          back
        </h4>
      </div>
    </div>
  );
};

export default PlayingMovies;
