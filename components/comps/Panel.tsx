import React from 'react';
import Card from './Card';
import Image from 'next/image';

const Panel = () => {
  return (
    <div className='flex flex-col md:flex-row mt-12 px-4'>
      <div className="w-full md:w-1/2 h-[250px] relative mb-6 md:mb-0">
        <Image 
          src="/Images/Epic.jpg" 
          alt='Blog image' 
          layout='fill' 
          objectFit='cover' 
          className='rounded-2xl'
        />
      </div>
      <div className="w-full md:w-1/2 px-4 md:px-8">
        <div className="text-purple-500 font-thin text-sm mt-3 md:mt-0">
          <span className='mr-1'>Sunday,</span>
          <span>1 Jan 2023</span>
        </div>
        <h3 className='mt-3 font-bold text-xl'>Title</h3>
        <p className='mt-3 text-sm'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat minus vitae eos qui, ex tempora quia aliquam suscipit at reiciendis doloremque consequatur ut nostrum aliquid, quasi quis, deleniti molestias mollitia?
        </p>
        <Card/>
      </div>
    </div>
  );
}

export default Panel;
