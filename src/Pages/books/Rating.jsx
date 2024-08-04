import React from 'react'
import { FaStar } from "react-icons/fa6";

const Rating = ({ value }) => {
   const starsArray=Array.from({length:value})
  return (
      <>
          {
              starsArray.map((_, index) => (
                  < FaStar key={index} className='text-primary'/>
              ))
      }
      </>
  )
}

export default Rating
