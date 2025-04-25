import React from 'react'
import { NavLink } from 'react-router-dom'

const NavMenu = () => {
  return (
    <div className='w-full fixed bottom-0 right-0 z-10 flex justify-center p-3 border-white transition-all duration-500 ease-in-out transform animate-fade-slide'>
        <div className="border-[#aaaaaa] border w-full justify-center flex gap-3 p-3 rounded-full bg-[#ffffff26] backdrop-blur-2xl">

        {/* <div className='border border-white w-fit flex gap-5 ' > */}
        <NavLink  to='/' className={({isActive})=>{
              return isActive? "text-[#ffffff] px-2 rounded-full bg-blue-400 items-center flex gap-2 text-[16px] " : "text-[#ffffff] hover:text-[#fbffb7] items-center text-[16px] flex gap-2"
            }}>
              Home</NavLink>
            <NavLink  to='/trending' className={({isActive})=>{
              return isActive? "text-[#ffffff] flex gap-2 px-2 rounded-full bg-blue-400 items-center justify-end text-[16px]" : "text-[#ffffff] hover:text-[#fbffb7] items-center flex text-[16px] gap-2"
            }}  >
              Trending</NavLink>
            <NavLink  to='/popular' className={({isActive})=>{
              return isActive? "text-[#ffffff] flex gap-2 px-2 rounded-full bg-blue-400 items-center text-[16px]" : "text-[#ffffff] hover:text-[#fbffb7] items-center flex text-[16px] gap-2"
            }}  >
              Popular</NavLink>
            <NavLink  to='/movies' className={({isActive})=>{
              return isActive? "text-[#ffffff] flex gap-2 px-2 rounded-full bg-blue-400 items-center text-[16px]" : "text-[#ffffff] hover:text-[#fbffb7] items-center flex text-[16px] gap-2"
            }}  >
              Movies</NavLink>

            <NavLink  to='/tvshow' className={({isActive})=>{
              return isActive? "text-[#ffffff] flex gap-2 px-2 rounded-full bg-blue-400 items-center text-[16px]" : "text-[#ffffff] hover:text-[#fbffb7] items-center flex text-[16px] gap-2"
            }}  >
              TVshow</NavLink>
            </div>
        {/* </div> */}
        </div>
  )
}

export default NavMenu