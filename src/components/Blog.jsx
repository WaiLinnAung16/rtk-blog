import React from 'react'
import { useGetBLogsQuery } from '../rtkQuery/blogApi'
import BlogCard from './BlogCard';

const Blog = () => {
  const {data: blogs} = useGetBLogsQuery();
  console.log(blogs);
  return (
    <div className='flex flex-wrap gap-3 justify-center items-center h-screen'>
      {blogs?.map(blog=>{
        return <BlogCard key={blog?.id} blog={blog}/>
      })}
    </div>
  )
}

export default Blog