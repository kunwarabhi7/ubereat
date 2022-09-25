import React from 'react'
import {MdOutlineRestaurantMenu} from "react-icons/md";


const NavBar = () => {
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        {/* Left Side*/}
        <div className='flex items-center m-3'>
        <div className='cursor-pointer hover:bg-blue-300 bg-grey-300' >
        <MdOutlineRestaurantMenu size={40}/>
        </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>Uber <span className='font-bold'>Eats</span></h1>
        <div className='flex '>
            <p className='bg-black text-white rounded-full p-2'>Delivery</p>
            <p className='bg-gray-500 rounded-full p-2 '>Pickup</p>
        </div>
        </div>
        
        
    </div>
  )
}

export default NavBar
