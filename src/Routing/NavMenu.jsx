import React from 'react'
import { NavLink } from 'react-router-dom'

const NavMenu = ({setShowNavMenu}) => {
  return (
    <div className='w-full fixed top-0 right-0 z-10 mt-16 bg-black border flex justify-end p-4 border-white transition-all duration-500 ease-in-out transform animate-fade-slide'>
        <div className='border border-white w-fit' >
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
  )
}

export default NavMenu