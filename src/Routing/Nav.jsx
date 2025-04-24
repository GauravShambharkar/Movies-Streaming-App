import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Routing from "./Routing";
import { RiCloseLargeLine, RiMenu2Fill, RiMovie2Line, RiSearch2Line } from "@remixicon/react";
import axios from "../Component/Axios";
import NavMenu from "./NavMenu";

const Nav = () => {

  const [query,setQuery] = useState([])
  const [showQueryData, setShowQueryData] = useState([])
  const [showNavMenu, setShowNavMenu] = useState(false)

  console.log("results", showQueryData);
  // console.log(query);

function removeSearchQuery(){
  document.querySelector('input').value = ''
}

function renderNavMenu(){
  setShowNavMenu(!showNavMenu)
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

const navigate = useNavigate()
  const toHome = ()=>{
      navigate('/')
  }

  return (
    <>
    {/* navBar */}
    <div className="navbar w-full justify-between fixed z-1 gap-4 items-center px-2 py-2 border-b border-[#3f7cff]  bg-[#000000] backdrop-blur-lg flex pt-3">

    {/* navBar left side */}
      <div className="text-[#4d7cff]  items-center text-2xl p-2 flex">
      <RiMovie2Line/> 
      <h1 onClick={()=>toHome()} className="font-black text-[#5381ff]  ">StreamUp</h1>
      </div>


      {/* navBar right side */}
      <div className="rightSIde flex w-full  border-white justify-end ">
        <div className="flex flex-row items-center gap-3 px-2  max-sm:hidden border-white" >
            <NavLink to='/' className={({isActive})=>{
              return isActive? "text-[#f7ff66]  items-center flex gap-2 text-[13px] " : "text-[#ffffff] hover:text-[#fbffb7] items-center text-[13px] flex gap-2"
            }}>
              Home</NavLink>
            <NavLink to='/trending' className={({isActive})=>{
              return isActive? "text-[#f7ff66] flex gap-2 items-center text-[13px]" : "text-[#ffffff] hover:text-[#fbffb7] items-center flex text-[13px] gap-2"
            }}  >
              Trending</NavLink>
            <NavLink to='/popular' className={({isActive})=>{
              return isActive? "text-[#f7ff66] flex gap-2 items-center text-[13px]" : "text-[#ffffff] hover:text-[#fbffb7] items-center flex text-[13px] gap-2"
            }}  >
              Popular</NavLink>
            <NavLink to='/movies' className={({isActive})=>{
              return isActive? "text-[#f7ff66] flex gap-2 items-center text-[13px]" : "text-[#ffffff] hover:text-[#fbffb7] items-center flex text-[13px] gap-2"
            }}  >
              Movies</NavLink>

            <NavLink to='/tvshow' className={({isActive})=>{
              return isActive? "text-[#f7ff66] flex gap-2 items-center text-[13px]" : "text-[#ffffff] hover:text-[#fbffb7] items-center flex text-[13px] gap-2"
            }}  >
              TVshow</NavLink>

            </div>


            <div className="input flex gap-2  border-white max-md:w-full w-[50%] items-center p-2 rounded-sm ">
            <input onChange={(e)=>setQuery(e.target.value)} type="text" placeholder="Search movies, trending shows and more" className="border-b border-[#ffffff] text-white outline-none w-full" />
            {query.length > 0? (<RiCloseLargeLine onClick={()=>{setQuery(''),removeSearchQuery()}} className="cursor-pointer text-white"/>) : ""}
            <RiSearch2Line className="text-white" />
            <div className="NavMenu">
              <span onClick={()=>renderNavMenu()}  >
                {showNavMenu == true? <RiCloseLargeLine className="text-white hidden max-sm:block size-5"/>  : (<RiMenu2Fill className="text-white hidden max-sm:block size-5"/>) }
              </span>
              {showNavMenu === true? <NavMenu setShowNavMenu={setShowNavMenu} /> : null}
            </div>

            </div>
      </div>


    </div>

      {query.length>0? (<div id="inserchTab" className="top-17 z-1 bg-[#0000000b]  backdrop-blur-2xl border right-0 border-white overflow-auto scroll-auto absolute grid grid-cols-2 max-md:grid-cols-1 max-lg:grid-cols-1  gap-4 p-4 w-full h-110">
        {/* child cards */}
        {showQueryData.map((item,id)=>{
            return <div key={id} className="flex gap-4 max-md:h-40 border border-white bg-[#1d1d1d] w-full rounded-sm child hover:bg-[#2c2c2c] duration-220 transition-colors ease-in-out">
          <img
            className="rounded-sm w-40 h-50 max-md:w-25 max-md:h-full object-cover  border-white"
            src={item.backdrop_path || item.profile_path ? `https://image.tmdb.org/t/p/original/${item.backdrop_path || item.profile_path}` : "https://scubapro.johnsonoutdoors.com/themes/custom/jo_base/assets/images/no-image-available-en.jpg" }
            alt=""
          />
          {/* text content */}
          <div className="flex flex-col py-2 gap-2 border border-white pr-2 w-fit">
            <h1 className="font-bold text-[#9cabff] max-md:text-[14px] ">{item.original_name || item.original_title}</h1>
            <h1 className="text-[#8e9be3] max-sm:text-[12px]">
              {item.overview?.length > 150
                ? `${item.overview.slice(0, 150)}...`
                : item.overview}
            </h1>
            <h1 className="text-[#8e9be3] max-sm:text-[12px]">{parseFloat(item.vote_average).toFixed(2)}/10</h1>
          </div>
        </div>})}      
      </div>) : ""}
      <Routing/>

    </>
  );
};


export default Nav;
