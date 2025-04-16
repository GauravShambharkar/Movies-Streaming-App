import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const nagivate = useNavigate();
  function to() {
    nagivate("/trending");
  }



  return (
    <>
      <div className="w-full h-full border p-4 mix-blend-difference backdrop-blur-sm  flex flex-col justify-center items-center gap-4">
        <h1 className="text-[#7499ff] p-4 stroke-1 stroke-white rounded-2xl lg:text-7xl font-semibold text-center max-md:text-3xl max-sm:text-[30px]">
          Your Streaming Guide For <br /> Movies, TV Shows & <br /> Sports.
        </h1>
        <p className="text-[#bdbdbd] text-center">
          Find where to stream new, popular & upcoming entertainment with
          JustWatch.
        </p>

        <button
          onClick={() => to()}
          className="bg-[#e9e9e9] backdrop-blur-xl border border-white p-2 rounded-lg shadow-2xl shadow-[#ffe8e8] text-[#4576ff] hover:bg-[#4576ff] hover:text-white transition-colors duration-200 ease-in-out cursor-pointer"
        >
          Discover Movies & TV Shows
        </button>
      </div>

      <div className="searchBox absolute w-full h-100 bg-[#ffffff11] backdrop-blur-xl top-15 right-0"></div>


      {/* Features Section */}
      <div className="w-full py-10 px-6 bg-[#121212] flex flex-col items-center text-white gap-6">
        <h2 className="text-3xl lg:text-5xl font-bold text-center text-[#7499ff]">
          What We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mt-6">
          <div className="bg-[#1f1f1f] p-6 rounded-2xl shadow-md hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">All-in-One Search</h3>
            <p>Search across all streaming platforms in one place.</p>
          </div>
          <div className="bg-[#1f1f1f] p-6 rounded-2xl shadow-md hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">Real-time Updates</h3>
            <p>Stay updated with what’s trending and newly released.</p>
          </div>
          <div className="bg-[#1f1f1f] p-6 rounded-2xl shadow-md hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">Personalized Picks</h3>
            <p>Get tailored recommendations based on your interests.</p>
          </div>
        </div>
      </div>

      {/* Trending Section */}
      <div className="w-full py-10 px-6 bg-[#0f0f0f] flex flex-col items-center text-white gap-6">
        <Link to="/trending">
          <h2 className="text-3xl lg:text-5xl font-bold text-center text-[#7499ff]">
            Trending Now
          </h2>
        </Link>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 mt-6">
          {[
            "Oppenheimer",
            "The Last of Us",
            "F1 Drive to Survive",
            "Avatar 2",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] p-4 rounded-xl shadow hover:scale-105 transition-transform"
            >
              <h4 className="text-lg font-semibold text-[#ffffff]">{item}</h4>
              <p className="text-[#bbbbbb] text-sm">Now Streaming</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
