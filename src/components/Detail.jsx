import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetBlogDetailQuery } from '../rtkQuery/blogApi';

const Detail = () => {
    const {id} = useParams();
    const {data:blog} = useGetBlogDetailQuery(id);
    console.log(blog);
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='flex flex-col items-start gap-2 shadow-md p-5'>
            <img src={blog?.image} alt="img" className='h-[400px]'/>
            <h1 className='font-bold text-xl uppercase'>{blog?.title}</h1>
            <p >{blog?.description}</p>
           <div className='flex gap-2'>
           <Link to={`/`}>
                <button className='px-4 py-1 bg-slate-900 text-white'>Back</button>
            </Link>
            <Link to={`/edit/${blog?.id}`}>
                <button className='px-4 py-1 bg-sky-900 text-white'>Edit</button>
            </Link>
            </div> 
        </div>
    </div>
  )
}

export default Detail