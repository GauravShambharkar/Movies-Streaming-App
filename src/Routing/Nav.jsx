import React from "react";
import { NavLink } from "react-router-dom";
import Routing from "./Routing";
import { RiColorFilterAiLine, RiFile2Line, RiFilmLine, RiHomeWifiLine, RiMovie2Line } from "@remixicon/react";

const Nav = () => {
  return (
    <>
    {/* navBar */}
    <div className="navbar w-full justify-between fixed z-1 gap-4 items-center px-2 border-r border-[#7d7d7d] bg-[#000000] backdrop-blur-lg flex pt-3">

    {/* navBar left side */}
      <div className="text-[#4d7cff] items-center text-2xl p-2 flex">
      <RiMovie2Line/> 
      <h1 className="font-black text-[#5381ff]">StreamUp</h1>
      </div>

      {/* navBar right side */}
      <div className="flex flex-row items-center gap-2 px-2 border border-white" >

          <NavLink to='/' className={({isActive})=>{
            return isActive? "text-[#ffffff] flex gap-2 " : "text-[#ffffff] flex gap-2"
          }}>
            <RiHomeWifiLine/>
            Home</NavLink>
          <NavLink to='/series' className={({isActive})=>{
            return isActive? "text-[#ffffff] flex gap-2 " : "text-[#ffffff] flex gap-2"
          }}  >
            <RiColorFilterAiLine/>
            Series</NavLink>
          <NavLink to='/movies' className={({isActive})=>{
            return isActive? "text-[#ffffff] flex gap-2 " : "text-[#ffffff] flex gap-2"
          }}  >
            <RiFilmLine/>
            
            Movies</NavLink>
      </div>
    </div>



      <Routing/>
    </>
  );
};

export default Nav;
