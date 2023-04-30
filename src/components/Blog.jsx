import React from 'react'
import { useGetBLogsQuery } from '../rtkQuery/blogApi'
import BlogCard from './BlogCard';
import { Link } from 'react-router-dom';

const Blog = () => {
  const {data: blogs,isLoading} = useGetBLogsQuery();
  console.log(blogs);
  if(isLoading){
    return <div className='flex justify-center items-center h-screen text-4xl'>Is Loading....</div>
  }
  return (
    <div className='flex flex-col items-center py-5'>
      <Link to={'/create'}>
      <button className='px-4 py-1 bg-slate-900 text-white'>Create new blog</button>

      </Link>
      <div className='flex flex-wrap gap-3 justify-center items-center h-screen'>
        {blogs?.map(blog=>{
          return <BlogCard key={blog?.id} blog={blog}/>
        })}
      </div>
    </div>
    
  )
}

export default Blog