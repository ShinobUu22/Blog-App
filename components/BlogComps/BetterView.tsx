import React from 'react'
import Image from 'next/image'
const BetterView = () => {
  return (
    <div className='flex-5 px-4'>
         <div className="text-purple-500 font-thin text-sm mt-3">
        <span className='mr-1'>Sunday,</span>
        <span>1 Jan 2023</span>
      </div>
      <div className="w-full h-[300px] relative mt-6">
        <Image 
          src="/Images/Epic.jpg" 
          alt='Blog image' 
          layout='fill' 
          objectFit='cover' 
          className='rounded-lg'
        />
      </div>
      
     
      
      <h3 className='mt-3 font-bold text-xl'>Title</h3>
      
      <p className='mt-3 text-justify'>
        Description
      </p>
   
    </div>
  )
}

export default BetterView
