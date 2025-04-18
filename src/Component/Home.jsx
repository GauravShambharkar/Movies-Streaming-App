import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const nagivate = useNavigate();
  function to() {
    nagivate("/trending");
  }


  return (
    <>
      <div className="flex flex-col  justify-center items-center gap-4 backdrop-blur-sm p-4 border w-full h-full">
        <h1 className="stroke-1  p-4 rounded-2xl font-semibold text-[#f7ff66] max-sm:text-[30px] max-md:text-3xl lg:text-7xl text-center">
          Your Streaming Guide For <br /> Movies, TV Shows & <br /> Sports.
        </h1>
        <p className="text-[#bdbdbd] text-center">
          Find where to stream new, popular & upcoming entertainment with
          JustWatch.
        </p>

        <button
          onClick={() => to()}
          className="bg-[#5095fc]  hover:bg-[white] hover:text-[#4576ff] shadow-[#ffe8e8] shadow-2xl backdrop-blur-xl p-2 border border-white rounded-lg text-[white]  transition-colors duration-200 ease-in-out cursor-pointer"
        >
          Discover Movies & TV Shows
        </button>
      </div>

     

      {/* Features Section */}
      <div className="flex flex-col items-center gap-6 bg-[#121212] px-6 py-10 w-full text-white">
        <h2 className="font-bold text-[#7499ff] text-3xl lg:text-5xl text-center">
          What We Offer
        </h2>
        <div className="gap-8 grid md:grid-cols-3 mt-6">
          <div className="bg-[#1f1f1f] shadow-md p-6 rounded-2xl hover:scale-105 transition-transform">
            <h3 className="mb-2 font-semibold text-xl">All-in-One Search</h3>
            <p>Search across all streaming platforms in one place.</p>
          </div>
          <div className="bg-[#1f1f1f] shadow-md p-6 rounded-2xl hover:scale-105 transition-transform">
            <h3 className="mb-2 font-semibold text-xl">Real-time Updates</h3>
            <p>Stay updated with what’s trending and newly released.</p>
          </div>
          <div className="bg-[#1f1f1f] shadow-md p-6 rounded-2xl hover:scale-105 transition-transform">
            <h3 className="mb-2 font-semibold text-xl">Personalized Picks</h3>
            <p>Get tailored recommendations based on your interests.</p>
          </div>
        </div>
      </div>

      {/* Trending Section */}
      <div className="flex flex-col items-center gap-6 bg-[#0f0f0f] px-6 py-10 w-full text-white">
        <Link to="/trending">
          <h2 className="font-bold text-[#7499ff] text-3xl lg:text-5xl text-center">
            Trending Now
          </h2>
        </Link>

        <div className="gap-6 grid sm:grid-cols-2 md:grid-cols-4 mt-6">
          {[
            "Oppenheimer",
            "The Last of Us",
            "F1 Drive to Survive",
            "Avatar 2",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] shadow p-4 rounded-xl hover:scale-105 transition-transform"
            >
              <h4 className="font-semibold text-[#ffffff] text-lg">{item}</h4>
              <p className="text-[#bbbbbb] text-sm">Now Streaming</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
