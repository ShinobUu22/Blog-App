import React from 'react';
import Image from 'next/image';
import Card from './Card';

const RBlogPost = () => {
  return (
    <div className='flex-1 flex flex-col md:flex-row w-full lg:w-1/3 px-4 mt-6'>
      <div className="w-full h-[250px] relative md:w-1/2 lg:w-full">
        <Image 
          src="/Images/Coding.jpg" 
          alt='Blog image' 
          layout='fill' 
          objectFit='cover' 
          className='rounded-lg'
        />
      </div>
      
      <div className="md:w-1/2 lg:w-full px-4 mt-3 md:mt-0">
        <div className="text-purple-500 font-thin text-sm mt-3 md:mt-0">
          <span className='mr-1'>Sunday,</span>
          <span>1 Jan 2023</span>
        </div>
        <h3 className='mt-3 font-bold text-xl'>Title</h3>
        <p className='mt-3 text-justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat minus vitae eos qui, ex tempora quia aliquam suscipit at reiciendis doloremque consequatur ut nostrum aliquid, quasi quis, deleniti molestias mollitia?
        </p>
        <Card/>
      </div>
    </div>
  );
}

export default RBlogPost;
