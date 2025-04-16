import React from "react";
import { NavLink } from "react-router-dom";
import Routing from "./Routing";
import { RiCloseCircleLine, RiCloseLargeLine, RiColorFilterAiLine, RiCrossLine, RiFile2Line, RiFilmLine, RiHomeWifiLine, RiMovie2Line, RiSearch2Line } from "@remixicon/react";

const Nav = () => {



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
            <RiSearch2Line className="text-white" />
            <input type="text" placeholder="Search" className="border-b border-[#ffffff] text-white outline-none w-full" />
            <RiCloseLargeLine className="cursor-pointer text-white" />
            <button className="px-2 bg-[#578dff] text-[#ffffff] rounded-md" >Search</button>
            </div>
      </div>


    </div>



      <Routing/>
    </>
  );
};

export default Nav;
