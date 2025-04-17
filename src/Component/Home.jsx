import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const nagivate = useNavigate();
  function to() {
    nagivate("/trending");
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4 backdrop-blur-sm p-4 border w-full h-full mix-blend-difference">
        <h1 className="stroke-1 stroke-white p-4 rounded-2xl font-semibold text-[#7499ff] max-sm:text-[30px] max-md:text-3xl lg:text-7xl text-center">
          Your Streaming Guide For <br /> Movies, TV Shows & <br /> Sports.
        </h1>
        <p className="text-[#bdbdbd] text-center">
          Find where to stream new, popular & upcoming entertainment with
          JustWatch.
        </p>

        <button
          onClick={() => to()}
          className="bg-[#e9e9e9] hover:bg-[#4576ff] shadow-[#ffe8e8] shadow-2xl backdrop-blur-xl p-2 border border-white rounded-lg text-[#4576ff] hover:text-white transition-colors duration-200 ease-in-out cursor-pointer"
        >
          Discover Movies & TV Shows
        </button>
      </div>

      <div className="top-15 right-0 border-white overflow-auto scroll-auto absolute flex flex-col gap-4 p-4 w-full h-100">
        <div className="flex gap-4 bg-[#1d1d1d] border-white rounded-sm child hover:bg-[#2c2c2c] duration-220 transition-colors ease-in-out">
          <img
            className="rounded-sm w-35 object-contain"
            src="https://m.media-amazon.com/images/M/MV5BM2FiMjQ0ZjAtYzc1OC00NzgzLWIyNmQtYmIwYjdhZWM5MmRiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
            alt=""
          />
          {/* text content */}
          <div className="flex flex-col py-2 gap-2 w-fit">
            <h1 className="font-bold text-[#9cabff]">Loki -Season 2</h1>
            <h1 className="text-[#8e9be3]">
              Description: Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Dolorum quos error sint officia atque odit perferendis ipsa
              ad asperiores ipsum, fuga aliquid numquam magni architecto facere
              quidem fugiat labore laborum soluta. Molestiae hic tempore
              corporis distinctio cum doloribus sint repudiandae labore.
              Aspernatur, quos vel! Repellat molestiae officia dolores rem est.
            </h1>
            <h1 className="text-[#8e9be3]">Rating:9.9/10</h1>
          </div>
        </div>
        <div className="flex gap-4 bg-[#1d1d1d] border-white rounded-sm child hover:bg-[#2c2c2c] duration-220 transition-colors ease-in-out">
          <img
            className="rounded-sm w-35 object-contain"
            src="https://m.media-amazon.com/images/M/MV5BM2FiMjQ0ZjAtYzc1OC00NzgzLWIyNmQtYmIwYjdhZWM5MmRiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
            alt=""
          />
          {/* text content */}
          <div className="flex flex-col py-2 gap-2 w-fit">
            <h1 className="font-bold text-[#9cabff]">Loki -Season 2</h1>
            <h1 className="text-[#8e9be3]">
              Description: Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Dolorum quos error sint officia atque odit perferendis ipsa
              ad asperiores ipsum, fuga aliquid numquam magni architecto facere
              quidem fugiat labore laborum soluta. Molestiae hic tempore
              corporis distinctio cum doloribus sint repudiandae labore.
              Aspernatur, quos vel! Repellat molestiae officia dolores rem est.
            </h1>
            <h1 className="text-[#8e9be3]">Rating:9.9/10</h1>
          </div>
        </div>
        <div className="flex gap-4 bg-[#1d1d1d] border-white rounded-sm child hover:bg-[#2c2c2c] duration-220 transition-colors ease-in-out">
          <img
            className="rounded-sm w-35 object-contain"
            src="https://m.media-amazon.com/images/M/MV5BM2FiMjQ0ZjAtYzc1OC00NzgzLWIyNmQtYmIwYjdhZWM5MmRiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
            alt=""
          />
          {/* text content */}
          <div className="flex flex-col py-2 gap-2 w-fit">
            <h1 className="font-bold text-[#9cabff]">Loki -Season 2</h1>
            <h1 className="text-[#8e9be3]">
              Description: Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Dolorum quos error sint officia atque odit perferendis ipsa
              ad asperiores ipsum, fuga aliquid numquam magni architecto facere
              quidem fugiat labore laborum soluta. Molestiae hic tempore
              corporis distinctio cum doloribus sint repudiandae labore.
              Aspernatur, quos vel! Repellat molestiae officia dolores rem est.
            </h1>
            <h1 className="text-[#8e9be3]">Rating:9.9/10</h1>
          </div>
        </div>
        
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
