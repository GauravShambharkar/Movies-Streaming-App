import React from 'react'
import { NavLink } from 'react-router-dom'

const NavMenu = () => {
  return (
    <div className='w-full fixed top-0 right-0 z-1 mt-16 bg-black border flex justify-end p-4 border-white'>
        <div className='border border-white w-fit' >
        <NavLink to='/' className={({isActive})=>{
              return isActive? "text-[#f7ff66]  items-center flex gap-2 text-[13px] " : "text-[#ffffff] hover:text-[#fbffb7] items-center text-[13px] flex gap-2"
            }}>
              Home</NavLink>
            <NavLink to='/trending' className={({isActive})=>{
              return isActive? "text-[#f7ff66] flex gap-2 items-center justify-end text-[13px]" : "text-[#ffffff] hover:text-[#fbffb7] items-center flex text-[13px] gap-2"
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
        </div>
  )
}

export default NavMenu