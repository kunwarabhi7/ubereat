import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 '>
        <div className='relative max-h-[500px]'>
            <div  className='absolute w-full h-full max-h-[500px] flex flex-col justify-center '>
            <h1 className='text-4xl mt-4 pt-8 px-4 sm:text-5xl md:text-6xl lg:text-7xl lg:mt-[390px] text-green-600 font-bold'>The <span className='text-black'>Best</span></h1>
            <h1 className='text-xl px-4 font-bold sm:text-5xl md:text-6xl lg:text-7xl text-green-600'> <span className='text-black'>Food</span>Delivered</h1>
            </div>
        <img className='w-full max-h-[900px] object-cover pr-4' src="https://images.pexels.com/photos/1161547/pexels-photo-1161547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="food" />
        </div>
    </div>
  )
}

export default Hero