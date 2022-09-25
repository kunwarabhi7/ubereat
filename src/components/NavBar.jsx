import React from 'react'
import {MdOutlineRestaurantMenu} from "react-icons/md";
import { FcSearch } from "react-icons/fc";
import { AiOutlineShoppingCart } from "react-icons/ai";




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
            <p className='bg-gray-400 rounded-full p-2 '>Pickup</p>
        </div>
        </div>
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
            <FcSearch size='25' />
            <input className='bg-transparent p-2 w-full focus:outline-none'
          type='text'
          placeholder='Search foods' />
            
        </div>
        <button className='bg-black text-white text-bold hidden hover:bg-blue-300 hover:text-black md:flex items-center p-2 rounded-full'><AiOutlineShoppingCart className='mr-2 p-2' size={35} />Cart</button>
            
    </div>
  )
}

export default NavBar
