import React from 'react'
import { NavLink } from 'react-router-dom'

const NavMenu = ({setShowNavMenu}) => {
  return (
    <div className='w-full fixed bottom-0 rounded-full right-0 z-10 flex justify-center p-4 border-white transition-all duration-500 ease-in-out transform animate-fade-slide'>
        <div className="border-white p-3 rounded-full bg-[#ffffff26] backdrop-blur-2xl">

        <div className='border-white w-fit flex gap-6' >
        <NavLink onClick={()=>setShowNavMenu('')} to='/' className={({isActive})=>{
              return isActive? "text-[#f7ff66]  items-center flex gap-2 text-[16px] " : "text-[#ffffff] hover:text-[#fbffb7] items-center text-[16px] flex gap-2"
            }}>
              Home</NavLink>
            <NavLink onClick={()=>setShowNavMenu('')} to='/trending' className={({isActive})=>{
              return isActive? "text-[#f7ff66] flex gap-2 items-center justify-end text-[16px]" : "text-[#ffffff] hover:text-[#fbffb7] items-center flex text-[16px] gap-2"
            }}  >
              Trending</NavLink>
            <NavLink onClick={()=>setShowNavMenu('')} to='/popular' className={({isActive})=>{
              return isActive? "text-[#f7ff66] flex gap-2 items-center text-[16px]" : "text-[#ffffff] hover:text-[#fbffb7] items-center flex text-[16px] gap-2"
            }}  >
              Popular</NavLink>
            <NavLink onClick={()=>setShowNavMenu('')} to='/movies' className={({isActive})=>{
              return isActive? "text-[#f7ff66] flex gap-2 items-center text-[16px]" : "text-[#ffffff] hover:text-[#fbffb7] items-center flex text-[16px] gap-2"
            }}  >
              Movies</NavLink>

            <NavLink onClick={()=>setShowNavMenu('')} to='/tvshow' className={({isActive})=>{
              return isActive? "text-[#f7ff66] flex gap-2 items-center text-[16px]" : "text-[#ffffff] hover:text-[#fbffb7] items-center flex text-[16px] gap-2"
            }}  >
              TVshow</NavLink>
            </div>
        </div>
        </div>
  )
}

export default NavMenu