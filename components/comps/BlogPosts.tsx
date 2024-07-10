import Image from 'next/image';
import React from 'react';
import Card from './Card';

const BlogPosts = () => {
  return (
    <div className='flex-1 w-full lg:w-2/3 px-4'>
      

      <div className="w-full h-[300px] relative mt-6">
        <Image 
          src="/Images/Epic.jpg" 
          alt='Blog image' 
          layout='fill' 
          objectFit='cover' 
          className='rounded-lg'
        />
      </div>
      
      <div className="text-purple-500 font-thin text-sm mt-3">
        <span className='mr-1'>Sunday,</span>
        <span>1 Jan 2023</span>
      </div>
      
      <h3 className='mt-3 font-bold text-xl'>Title</h3>
      
      <p className='mt-3 text-justify'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat minus vitae eos qui, ex tempora quia aliquam suscipit at reiciendis doloremque consequatur ut nostrum aliquid, quasi quis, deleniti molestias mollitia?
      </p>
      
      <Card />
    </div>
  );
}

export default BlogPosts;
