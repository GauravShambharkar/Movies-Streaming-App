import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Routing from "./Routing";
import { RiCloseLargeLine, RiMovie2Line, RiSearch2Line } from "@remixicon/react";
import axios from "../Component/Axios";

const Nav = () => {

  const [query,setQuery] = useState([])
  const [showQueryData, setShowQueryData] = useState([])

  console.log("results", showQueryData);
  console.log(query);

function removeSearchQuery(){
  document.querySelector('input').value = ''
}



async function getSearch(){
  try{
   const showData =  await axios.get(`/search/multi?query=${query}`)
   setShowQueryData(showData.data.results)
   console.log(showData.data.results);
  }
  catch{
    console.log('error')
  }
}

useEffect(()=>{
  getSearch()

},[query])

  return (
    <>
    {/* navBar */}
    <div className="navbar w-full justify-between fixed z-1 gap-4 items-center px-2 py-2 border-r border-b border-[#3f7cff]  bg-[#ffffff07] backdrop-blur-lg flex pt-3">

    {/* navBar left side */}
      <div className="text-[#4d7cff] items-center text-2xl p-2 flex">
      <RiMovie2Line/> 
      <h1 className="font-black text-[#5381ff]">StreamUp</h1>
      </div>


      {/* navBar right side */}
      <div className="rightSIde flex w-full border-white justify-end ">
        <div className="flex flex-row items-center gap-3 px-2  border-white" >


            <NavLink to='/' className={({isActive})=>{
              return isActive? "text-[#a2c9ff]  items-center flex gap-2 text-[13px] " : "text-[#ffffff] hover:text-[#4576ff] items-center text-[13px] flex gap-2"
            }}>
              Home</NavLink>
            <NavLink to='/trending' className={({isActive})=>{
              return isActive? "text-[#a2c9ff] flex gap-2 items-center text-[13px]" : "text-[#ffffff] hover:text-[#4576ff] items-center flex text-[13px] gap-2"
            }}  >
              Trending</NavLink>
            <NavLink to='/popular' className={({isActive})=>{
              return isActive? "text-[#a2c9ff] flex gap-2 items-center text-[13px]" : "text-[#ffffff] hover:text-[#4576ff] items-center flex text-[13px] gap-2"
            }}  >
              Popular</NavLink>
            <NavLink to='/movies' className={({isActive})=>{
              return isActive? "text-[#a2c9ff] flex gap-2 items-center text-[13px]" : "text-[#ffffff] hover:text-[#4576ff] items-center flex text-[13px] gap-2"
            }}  >
              Movies</NavLink>

            <NavLink to='/tvshow' className={({isActive})=>{
              return isActive? "text-[#a2c9ff] flex gap-2 items-center text-[13px]" : "text-[#ffffff] hover:text-[#4576ff] items-center flex text-[13px] gap-2"
            }}  >
              TVshow</NavLink>

            </div>


            <div className="input flex gap-2 w-[50%] p-2 rounded-sm ">
            <input onChange={(e)=>setQuery(e.target.value)} type="text" placeholder="Search movies, trending shows and more" className="border-b border-[#ffffff] text-white outline-none w-full" />
            {query.length > 0? (<RiCloseLargeLine onClick={()=>{setQuery(''),removeSearchQuery()}} className="cursor-pointer text-white"/>) : ""}
            <RiSearch2Line className="text-white" />
            </div>
      </div>


    </div>

      {query.length>0? (<div id="inserchTab" className="top-17 z-1 bg-black border right-0 border-white overflow-auto scroll-auto absolute flex flex-col gap-4 p-4 w-full h-110">
        {showQueryData.map((item,id)=>{
          return <div className="flex gap-4 bg-[#1d1d1d] border-white rounded-sm child hover:bg-[#2c2c2c] duration-220 transition-colors ease-in-out">
          <img
            className="rounded-sm w-35 object-contain"
            src="https://m.media-amazon.com/images/M/MV5BM2FiMjQ0ZjAtYzc1OC00NzgzLWIyNmQtYmIwYjdhZWM5MmRiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
            alt=""
          />
          {/* text content */}
          <div className="flex flex-col py-2 gap-2 w-fit">
            <h1 className="font-bold text-[#9cabff]">{item.name}</h1>
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
        </div>})}      
      </div>) : ''}
      <Routing/>

    </>
  );
};


export default Nav;
