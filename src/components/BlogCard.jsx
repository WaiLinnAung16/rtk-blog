import React from 'react'
import { Link } from 'react-router-dom'
import { useDeleteBlogMutation } from '../rtkQuery/blogApi'

const BlogCard = ({blog}) => {
  const [deleteBlog] = useDeleteBlogMutation()
  const deleteHandler = (id) =>{
      deleteBlog(id);
  }
  return (
    <div className='flex flex-col items-start gap-2 p-5'>
      <img src={blog?.image} alt="img" className='h-[400px]'/>
      <h1 className='font-bold text-xl uppercase'>{blog?.title}</h1>
      <p >{blog?.description}</p>
      <div className='flex gap-2 '>
      <Link to={`/blogs/${blog?.id}`}>
      <button className='px-4 py-1 bg-slate-900 text-white'>Detail</button>
      </Link>
      <button className='px-4 py-1 bg-red-900 text-white' onClick={()=>deleteHandler(blog?.id)}>Delete</button>
      </div>
    </div>
  )
}

export default BlogCard