import React from 'react'

import Card from '../comps/Card'
const RecentBlog = () => {
  return (
    <div className='flex-2 px-4 max-md:hidden'>
      <h1 className='text-2xl font-semibold mt-7'>Recent Blog Posts</h1>
   
      <div className="text-purple-500 font-thin text-sm mt-3">
        <span className='mr-1'>Sunday,</span>
        <span>1 Jan 2023</span>
      </div>
      
      
      <h3 className='mt-3 font-bold text-xl'>Title</h3>
      
      <p className='mt-3 text-justify font-[300]'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat minus vitae eos qui, ex tempora quia aliquam suscipit at reiciendis doloremque consequatur ut nostrum aliquid, quasi quis, deleniti molestias mollitia?
      </p>
      
      <Card />
    </div>
  )
}

export default RecentBlog
