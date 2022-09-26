import React from 'react'

const Breaking = () => {
  return (
    <div className='max-w-[1640px] mx-auto px-6 md:pt-[80px] lg:pt-[320px] py-12 grid md:grid-cols-3 gap-6'>
            {/*Card */}
      <div className='rounded-xl relative'>
      {/*Overlay */}
<div className='absolute w-full h-full rounded-xl text-white'>
  <p className='font-bold text-2xl px-2 pt-4'>Starter</p>
  <p className='px-2'>Spring Rools</p>
  <button className='border-white bg-white text-black absolute mx-2 bottom-4'>Order Now</button>
</div>
<img className='max-h-[160px]' src="https://images.pexels.com/photos/2059151/pexels-photo-2059151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
      </div>
         {/*Card */}
         <div className='rounded-xl relative'>
      {/*Overlay */}
<div className='absolute w-full h-full  rounded-xl text-white'>
  <p className='font-bold text-2xl px-2 pt-4'>Main Course</p>
  <p className='px-2'>Shahi Paneer</p>
  <button className='border-white bg-white text-black absolute mx-2 bottom-4'>Order Now</button>
</div>
<img className='max-h-[160px] w-[220px]' src="https://images.pexels.com/photos/11115801/pexels-photo-11115801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
      </div>
         {/*Card */}
         <div className='rounded-xl relative'>
      {/*Overlay */}
<div className='absolute w-full h-full  rounded-xl text-white'>
  <p className='font-bold text-2xl px-2 pt-4'>Desserts</p>
  <p className='px-2'>Rasgulla</p>
  <button className='border-white bg-white text-black absolute mx-2 bottom-4'>Order Now</button>
</div>
<img className='max-h-[160px] w-[220px]' src="https://images.pexels.com/photos/8788869/pexels-photo-8788869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
      </div>
      
    </div>
  )
}

export default Breaking