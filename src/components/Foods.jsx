import React from 'react'
import { data } from './data'

const Foods = () => {
  return (
    <div>
        {data.map((food)=>{
            const {id,name,category,image} = food
            return (
                <div className='grid-4' key={id}>
                    <p>{name}</p>
                    <img className='w-[160px]' src={image} alt="food" />
                    <p>{category}</p>

                </div>
            )
        })}
    </div>
  )
}

export default Foods