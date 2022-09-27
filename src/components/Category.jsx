import React from 'react'
import {categories} from './data'

const Category = () => {

  return (
    <div className='max-w-[1640px] px-2 py-12'>
        <h1 className='text-green-600 font-bold text-4xl text-center'>Top Rated Items</h1>
        {/*Categories */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6 '>
            {categories.map((category,index) =>(
                <div className='w-full h-full hover:scale-110 bg-gray-100 text-center text-2xl md:text-4xl' key={index}>
                    <h2>{category.name}</h2>
                    <img className='' src={category.image} alt={category.name} />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Category