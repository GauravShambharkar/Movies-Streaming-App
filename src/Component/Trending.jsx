import { RiGlobalLine, RiPlayCircleFill, RiShakeHandsFill, RiTvLine } from "@remixicon/react";
import axios from "../Component/Axios";
import React, { useEffect, useState } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';


const Trending = () => {
  // const trendingshowBanners = [
  //   {
  //     title: "Oppenheimer",
  //     category: "Movie",
  //     status: "Now Streaming",
  //   },
  //   {
  //     title: "The Last of Us",
  //     category: "TV Show",
  //     status: "Season 1 Available",
  //   },
  //   {
  //     title: "F1: Drive to Survive",
  //     category: "Documentary",
  //     status: "New Season Out",
  //   },
  //   {
  //     title: "Avatar: The Way of Water",
  //     category: "Movie",
  //     status: "Available in 4K",
  //   },
  // ];

  const [showBanner, setShowBanner] = useState(null);
  const [showTrending, setShowTrending] = useState([]);
  const [category, setCategory] = useState('all')

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
      const showTrend = await axios.get(`/trending/${category}/day`);
      setShowTrending(showTrend.data.results)
      console.log(showTrend.data.results);
    }
    catch(e){
      console.log("Error", e);
    }}


  useEffect(() => {
    renderBanner();  
    renderTrending()
  }, [category]);

  return (
    <div className="w-full  border backdrop-blur-sm py-2 flex flex-col border-white justify-center items-center gap-8 ">
      
      {/* Trending banner */}
      {showBanner ? (<div className="banner text-white border-white w-250 rounded-2xl h-120 mt-20 bg-cover bg-center max-lg:w-150 max-lg:h-90 max-md:w-90 max-md:h-55"
        style={{
          backgroundImage: `linear-gradient(to top, #000000 , rgba(0,0,0,0.10), rgba(0, 0, 0, 0)), url(https://image.tmdb.org/t/p/original/${showBanner.backdrop_path || showBanner.profile_path})`,
          backgroundPosition: "center",
          backgroundSize: "cover", 
        }}>

      <div className="w-full h-full flex gap-2 flex-col justify-end border border-white p-4 max-md:text-[10px]">
      
      {/* play button */}
      <span className="bottom border-white border w-full h-full flex items-center justify-center text-[#f7ff66] max-md:hidden ">
          <RiPlayCircleFill className="size-25 text-[#6696ff65] hover:text-[#6696ff] transition-colors duration-300 ease cursor-pointer " />
      </span>

      {/* banner content */}
        <h1 className="text-4xl font-bold text-[#f7ff66] max-md:text-[14px]" >{showBanner.name || showBanner.title || showBanner.original_name || showBanner.original_title }</h1>
        <h1>{showBanner.overview.slice(0,200)}...</h1>
        <div className="flex gap-2">
            <h1 className="flex gap-1 w-fit items-center border border-white">{<RiTvLine className="w-5 text-[#f7ff66]"/>}Genre: {showBanner.media_type}</h1>
            <h1 className=" w-fit border gap-1 flex items-center border-white">{<RiGlobalLine className="w-5 text-[#f7ff66]"/>}Language: {showBanner.original_language}</h1>
            <span className="border gap-1 flex items-center border-white" >{<RiShakeHandsFill className="w-5 text-[#f7ff66]"/>}Rating: {showBanner.vote_average || '?'}/10</span>
        </div>
        <button className="px-2 py-1 w-fit rounded-2xl text-[white] bg-[#7499ffca] backdrop-blur-2xl">Watch Trailer</button>
      </div>
      </div>) : <div className="text-white flex justify-center bg-black border-white w-250 rounded-2xl h-120 mt-20 bg-cover bg-center max-lg:w-150 max-lg:h-90 max-md:w-90 max-md:h-55 overflow-hidden"><img className="" src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmFnaXg0eWhnaWxtbXJ3Z3BuZmc1aXlmenlsbGp2ZHA1MjgyaWF0ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ycfHiJV6WZnQDFjSWH/giphy.gif"/></div>}

      <div className=" border border-white">
      <h2 className="text-[#f7ff66] lg:text-5xl text-3xl font-bold text-center">
        Trending Now
      </h2>
      <p className="text-[#bdbdbd] text-center mt-2 max-w-2xl">
        Discover what’s hot and trending across your favorite streaming
        platforms. Hand-picked and updated regularly.
      </p>
      </div>

      {/* dropDown category */}
      <div onChange={(e)=>setCategory(e.target.value)}  className="container w-full h-fit border flex justify-end border-white">
      <select  id="categorySelect"
        className="bg-[#1c1c1c] text-[#70a0ff] text-base rounded-md focus:ring-[#7499ff] focus:border-[#7499ff] block p-3 w-full sm:w-72 transition duration-200 ease-in-out shadow-md hover:border-[#7499ff] hover:bg-[#232323] cursor-pointer">
        <option defaultValue className="text-[#8a8a8a]">
          Filter
        </option>
        <option value="all" defaultValue >all</option>
        <option value="tv">tv</option>
        <option value="movie">movies</option>
      </select>
      </div>
      
      
      {/* cards */}
       <InfiniteScroll 
          
          hasMore={true}
          dataLength={showTrending.length}
          next={showTrending}
          loader={<h4>Please Wait...</h4>}>
      <div className="grid border p-4 border-white md:grid-cols-4 sm:grid-cols-2 gap-4 w-full max-w-7xl">
        {showTrending.map((item, index) => (
         
          <div key={index} className="bg-[#1e1e1e] border justify-between border-[#ffffff] p-4 flex flex-col gap-2 rounded-2xl shadow-lg hover:scale-101 transition-transform duration-200 ">
           {/* top of the card */}
           <div className="top">
           <img className="rounded-md" src={`https://image.tmdb.org/t/p/original/${item.backdrop_path || item.profile_path}`} alt="" />
            <h3 className="text-xl text-white font-semibold">{item.title || item.name}</h3>
            <p className="text-sm text-[#9ca3af]">{item.overview.slice(0,100)}...</p>
            <h5 className="text-[#f7ff66] text-[12px]" >Type: {item.media_type}</h5>
           </div>
           {/* bottom card content*/}
           <div className="bottom flex border  h-fit items-center border-white justify-between ">
            <span className="text-[#668fff] text-[12px] " >Popularity: {item.popularity>100?  "High" : 'Very Low'}</span>
            <span className="bottom text-[#f7ff66]   cursor-pointer">
              {/* {item.status} Watch Now */}
              <RiPlayCircleFill className="size-15 max-sm:size-8" />
            </span>
           </div>
          </div>
        ))}
      </div>
        </InfiniteScroll>
    </div>
  );
};

export default Trending;
