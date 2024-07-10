import AllBlogs from '@/components/comps/AllBlogs';
import BlogPosts from '@/components/comps/BlogPosts';
import Panel from '@/components/comps/Panel';
import RBlogPost from '@/components/comps/RBlogPost';
import React from 'react';

const HomePage = () => {
  return (
    <div className='flex justify-center'>
      <div className="w-full lg:w-4/5 md:w-full sm:w-full">
        <h1 className='mt-12 text-center font-bold text-responsive-sm md:text-responsive-md lg:text-responsive-lg'>
          <hr className='h-0.5 w-full'/>
          THE BLOG
          <hr className='h-0.5 w-full'/>
        </h1>
        
        <h1 className='text-2xl font-semibold mt-7'>Recent Blog Posts</h1>
        <div className="flex flex-col lg:flex-row gap-12 mt-12">
          <BlogPosts/>
          <RBlogPost/>
        </div>
        
        <Panel/>
        <AllBlogs/>
      </div>
    </div>
  );
};

export default HomePage;
