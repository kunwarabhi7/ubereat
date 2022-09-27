import React, { useState } from 'react'
import { data } from './data'

const Foods = () => {
  const [food,setFood] = useState(data)
  // Filter Types
const filterTypes = (category) => {
  setFood(
    data.filter((food) => food.category === category) 
  )
}
  //Filter value
  const filterPrice = ((price)=>{
    setFood(
      data.filter((food) => food.price === price)
    )
  })

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
       <h1 className='text-green-600 text-center font-bold text-4xl'>Top Rated Menu Items</h1>
       {/*Filter ROWS */}
       <div className='flex flex-col lg:flex-row justify-between'>
        {/*Filter Types */}
        <div>
          <p className='text-gray-600 font-bold'>Filter Types</p>
          <div className='flex flex-wrap justify-between '>
            <button onClick={()=>{setFood(data)}} className='border-green-600 bg-green-600 text-white p-2 m-1 hover:bg-orange-600 '>All</button>
            <button onClick={()=> filterTypes('burger')} className='border-green-600 bg-green-600 text-white p-2 m-1 hover:bg-orange-600 '>Burgers</button>
            <button onClick={()=> filterTypes('pizza')} className='border-green-600 bg-green-600 text-white p-2 m-1 hover:bg-orange-600 '>Pizza</button>
            <button  onClick={()=> filterTypes('salad')} className='border-green-600 bg-green-600 text-white p-2 m-1 hover:bg-orange-600 '>Salads</button>
            <button onClick={()=> filterTypes('chicken')}  className='border-green-600 bg-green-600 text-white p-2 m-1 hover:bg-orange-600 '>Chicken</button>
          </div>
        </div>
        {/*Filter Price */}
        <div>
          <p className='text-gray-600 font-bold'>Filter Price</p>
          <div className='flex justify-between max-w-[390px] w-full'>
            <button onClick={()=>{filterPrice('200')}} className='border-green-600 bg-green-600 text-white p-2 m-1 hover:bg-orange-600'>200</button>
            <button onClick={()=>{filterPrice('300')}} className='border-green-600 bg-green-600 text-white p-2 m-1 hover:bg-orange-600'>300</button>
            <button onClick={()=>{filterPrice('400')}} className='border-green-600 bg-green-600 text-white p-2 m-1 hover:bg-orange-600'>400</button>
            <button onClick={()=>{filterPrice('500')}} className='border-green-600 bg-green-600 text-white p-2 m-1 hover:bg-orange-600'>500</button>
          </div>
          </div>
        </div>
        {/*Display Food */}
        <div className='grid grid-cols-2 lg:grid-cols-4 pt-4 gap-6'>
          {food.map((item,index)=>(
            <div className='border shadow-lg rounded-lg hover:scale-110 duration-300' key={index}>
              <img className='w-full h-[200px] object-cover rounded-lg ' src={item.image} alt="item.image" />
              <div className='flex justify-between px-2 py-4'>
                <p className='font-bold'>{item.name}</p>
                <p><span className='bg-green-600 p-1 rounded-full'>{item.price}</span></p>
              </div>
            </div>
          ))}
        </div>

                </div>
  )
}

export default Foods