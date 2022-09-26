import React, { useState } from 'react'
import {MdOutlineRestaurantMenu} from "react-icons/md";
import { FcSearch } from "react-icons/fc";
import { AiOutlineShoppingCart ,AiFillTags} from "react-icons/ai";
import { GiCrossedSwords } from "react-icons/gi";
import { BsTruck,BsFillHeartFill,BsFillSaveFill } from "react-icons/bs";
import { MdHelp} from "react-icons/md";
import { FaWallet,FaUserFriends } from "react-icons/fa";




const NavBar = () => {
  const [nav, setNav] = useState(false )
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        {/* Left Side*/}
        <div className='flex items-center m-3'>
        <div onClick={()=>{setNav(!nav)}} className='cursor-pointer hover:bg-blue-300 bg-grey-300' >
        <MdOutlineRestaurantMenu size={40}/>
        </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>Uber <span className='font-bold text-green-600'>Eats</span></h1>
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
            {/* Mobile View */}
            {/* OverLay */}
            {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ""}
            {/*SideBar */}
            <div className={nav?'fixed top-0 left-0 w-[300px] h-screen z-10 bg-white duration-300':'fixed top-0 left-[-100%] w-[300px] h-screen z-10 bg-white duration-300'}>
<GiCrossedSwords size={30} onClick={()=>setNav(!nav)} className='absolute top-4 right-4 cursor-pointer'/>
<h1 className='text-3xl p-4'>Uber <span className='font-bold text-green-600'>Eats</span></h1>
<nav>
  <ul className='flex flex-col text-gray-800'>
    <li className='text-xl py-4 flex'><BsTruck size={35} className='mr-4 ml-2' />Orders</li>
    <li className='text-xl py-4 flex'><BsFillHeartFill size={35} className='mr-4 ml-2' />Favorites</li>
    <li className='text-xl py-4 flex'><FaWallet size={35} className='mr-4 ml-2' />Wallet</li>
    <li className='text-xl py-4 flex'><MdHelp size={35} className='mr-4 ml-2' />Help</li>
    <li className='text-xl py-4 flex'><AiFillTags size={35} className='mr-4 ml-2' />Promotions</li>
    <li className='text-xl py-4 flex'><BsFillSaveFill size={35} className='mr-4 ml-2' />Best One</li>
    <li className='text-xl py-4 flex'><FaUserFriends size={35} className='mr-4 ml-2' />Invite Friends</li>
  </ul>
</nav>
            </div>
    </div>
  )
}

export default NavBar
