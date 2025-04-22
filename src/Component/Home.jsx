import { RiFacebookBoxFill, RiGithubFill, RiLinkedinBoxFill } from "@remixicon/react";
import axios from "./Axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const nagivate = useNavigate();
  function to() {
    nagivate("/trending");
  }

  const [showData, setShowData] = useState([])


  async function getData(){
    const {data} = await axios.get('/discover/movie')
    setShowData(data.results)
    console.log("Home Data",data.results);
  }

  useEffect(()=>{
      getData()
      console.log("from the state",showData);
  },[])


  return (
    <>
      <div className="scroll-smooth flex flex-col  justify-center items-center gap-4 backdrop-blur-sm p-4 border w-full h-full">
        <h1 id="homeInitial" className="stroke-1  p-4 rounded-2xl font-semibold text-[#f7ff66] max-sm:text-[30px] max-md:text-3xl lg:text-7xl text-center">
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
          {showData.map((item, index) => (
            <div key={index} className="bg-[#1a1a1a] shadow p-4 rounded-xl hover:scale-105 transition-transform">
              <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path || item.poster_path}`} alt="" />
              <h4 className="font-semibold text-[#ffffff] text-lg">{item.original_name || item.name || item.title || item.original_title}</h4>
              <p className="text-[#bbbbbb] text-sm">Now Streaming</p>
            </div>
          ))}
        </div>
      </div>

            {/* Footer Section */}
            <footer className="bg-[#0a0a0a] text-[#bdbdbd] w-full border-t border-[#1f1f1f] py-8">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
              
              {/* Branding & Copyright */}
              <div className="text-center md:text-left  space-y-2 border-white">
                <h3 className="text-xl font-semibold text-white">MovieStream</h3>
                <p className="text-sm mt-1">&copy; {new Date().getFullYear()} All rights reserved.</p>
              
                 {/* Navigation Links */}
              <div className="flex flex-col gap-2 text-sm ">
                <a
                  href="#"
                  className="hover:text-[#5095fc] transition-colors duration-200"
                >
                  Home
                </a>
                <Link
                  to="/trending"
                  className="hover:text-[#5095fc] transition-colors duration-200"
                >
                  Trending
                </Link>
                <a
                  href="https://www.themoviedb.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#5095fc] transition-colors duration-200"
                >
                  TMDB
                </a>
              </div>

              </div>

             

              {/* Optional Social Icons */}
              <div className="flex gap-4 border-white">
                <a href="#" className="hover:text-white transition-colors duration-200">
                  <RiFacebookBoxFill className="text-[#85baff]"/>                </a>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  <RiGithubFill className="text-red-500"/>
                </a>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  <RiLinkedinBoxFill className="text-[#85baff]"/>
                </a>
              </div>
            </div>
          </footer>
    </>
  );
};

export default Home;
