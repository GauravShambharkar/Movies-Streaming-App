import { RiGlobalLine, RiShakeHandsFill, RiTvLine } from "@remixicon/react";
import axios from "../Component/Axios";
import React, { useEffect, useState } from "react";

const Trending = () => {
  const trendingshowBanners = [
    {
      title: "Oppenheimer",
      category: "Movie",
      status: "Now Streaming",
    },
    {
      title: "The Last of Us",
      category: "TV Show",
      status: "Season 1 Available",
    },
    {
      title: "F1: Drive to Survive",
      category: "Documentary",
      status: "New Season Out",
    },
    {
      title: "Avatar: The Way of Water",
      category: "Movie",
      status: "Available in 4K",
    },
  ];

  const [showBanner, setShowBanner] = useState(null);
  const [showTrending, setShowTrending] = useState([]);

  async function renderBanner() {
    try{
      const showdata = await axios.get(`/trending/all/day`);
      console.log(showdata.data.results);
      const randomeBanner = showdata.data.results[(Math.random() * showdata.data.results.length).toFixed()];
      setShowBanner(randomeBanner)
    }
    catch(e){
      console.log("Error", e);
    }}
  console.log("trend",showBanner);

  async function renderTrending() {
    try{
      const showTrend = await axios.get(`/trending/all/day`);
      setShowTrending(showTrend.data.results)
      console.log(showTrend.data.results);
    }
    catch(e){
      console.log("Error", e);
    }}


  useEffect(() => {
    renderBanner();  
    renderTrending()
  }, []);

  return (
    <div className="w-full  border backdrop-blur-sm py-2 flex flex-col border-white justify-center items-center m- gap-8 ">
      {showBanner ? (<div className="banner  text-white border-white w-250 rounded-2xl h-120 mt-20 bg-cover bg-center max-lg:w-150 max-lg:h-90 max-md:w-70 max-md:h-45"
        style={{
          backgroundImage: `linear-gradient(to top, #000000 , rgba(0,0,0,0.10), rgba(0, 0, 0, 0)), url(https://image.tmdb.org/t/p/original/${showBanner.backdrop_path || showBanner.profile_path})`,
          backgroundPosition: "center",
          backgroundSize: "cover", 
        }}>
      <div className="w-full h-full flex gap-2 flex-col justify-end  border-white p-4 max-md:text-[10px]">
        <h1 className="text-4xl font-bold text-[#f7ff66] max-md:text-[10px]" >{showBanner.name || showBanner.title || showBanner.original_name || showBanner.original_title }</h1>
        <h1>{showBanner.overview.slice(0,200)}...</h1>
        <div className="flex gap-2">
            <h1 className="flex gap-1 w-fit border border-white">{<RiTvLine className="w-5 text-[#f7ff66]"/>}Genre: {showBanner.media_type}</h1>
            <h1 className=" w-fit border gap-1 flex border-white">{<RiGlobalLine className="w-5 text-[#f7ff66]"/>}Language: {showBanner.original_language}</h1>
            <span className="border gap-1 flex border-white" >{<RiShakeHandsFill className="w-5 text-[#f7ff66]"/>}Rating: {showBanner.vote_average || '?'}/10</span>
        </div>
        <button className="px-2 w-fit rounded-2xl text-[white] bg-[#7499ffca] backdrop-blur-2xl">Watch Trailer</button>
      </div>
      </div>) : ''}

      <h2 className="text-[#f7ff66] lg:text-5xl text-3xl font-bold text-center">
        Trending Now
      </h2>
      <p className="text-[#bdbdbd] text-center max-w-2xl">
        Discover what’s hot and trending across your favorite streaming
        platforms. Hand-picked and updated regularly.
      </p>


      {/* cards */}
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 w-full max-w-6xl">
        {showTrending.map((item, index) => (
          <div key={index} className="bg-[#1e1e1e] border justify-between border-[#ffffff] p-4 flex flex-col gap-2 rounded-2xl shadow-lg hover:scale-101 transition-transform duration-200 ">
           <div className="top">
           <img className="rounded-md" src={`https://image.tmdb.org/t/p/original/${item.backdrop_path || item.profile_path}`} alt="" />
            <h3 className="text-xl text-white font-semibold">{item.title || item.name}</h3>
            <p className="text-sm text-[#9ca3af]">{item.overview.slice(0,100)}...</p>
           </div>
            <span className="bottom text-xs text-[#f7ff66] border cursor-pointer  bg-[#2c2c2c] w-fit py-1 px-2 rounded-2xl inline-block">
              {item.status} Watch Now
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
