import React from "react";
import { NavLink } from "react-router-dom";
import Routing from "./Routing";
import { RiMovie2Line } from "@remixicon/react";

const Nav = () => {
  return (
    <>
    {/* navBar */}
    <div className="navbar border border-white flex justify-between p-3 ">

    {/* navBar left side */}
      <div className="text-red-700">
      <RiMovie2Line/>
      </div>

      {/* navBar right side */}
      <div className="flex gap-4 " >

          <NavLink to='/' className={({isActive})=>{
            return isActive? "text-red-500" : "text-[#ffffff]"
          }}  >Home</NavLink>
          <NavLink to='/series' className={({isActive})=>{
            return isActive? "text-red-500" : "text-[#ffffff]"
          }}  >Series</NavLink>
          <NavLink to='/movies' className={({isActive})=>{
            return isActive? "text-red-500" : "text-[#ffffff]"
          }}  >Movies</NavLink>
          <input type="input" placeholder="Search" className="text-white border px-2 border-[#7a7a7a] rounded-md " />
      </div>
    </div>



      <Routing/>
    </>
  );
};

export default Nav;
