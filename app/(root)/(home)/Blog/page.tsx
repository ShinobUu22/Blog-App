import BetterView from '@/components/BlogComps/BetterView'
import RecentBlog from '@/components/BlogComps/RecentBlog'
import React from 'react'

const BlogPage = () => {
  return (
    <div className='flex justify-center'>
      <div className="flex w-5/6">
      <RecentBlog/>
      <BetterView/>
      </div>
    </div>
  )
}

export default BlogPage
