import React, { useState } from 'react'
import { useCreateBlogMutation } from '../rtkQuery/blogApi'
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [createBlog] = useCreateBlogMutation();
    const [title,setTitle] = useState('')
    const [description,setDesc] = useState('')
    const [image,setImg] = useState('')
    const nav = useNavigate();
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const blog = {id:Date.now(),title,description,image};
        createBlog(blog);
        nav('/')
    }
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center shadow-lg p-5'>
        <h1 className='font-bold text-sky-500'>Create Form</h1>
        <form onSubmit={onSubmitHandler} className='flex flex-col gap-3 w-96'>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Blog title...' className=' border-b-2 border-slate-700 outline-none p-2'/>
            <input type="text" value={description} onChange={(e)=>setDesc(e.target.value)} placeholder='Blog Description...' className=' border-b-2 border-slate-700 outline-none p-2'/>
            <input type="text" value={image} onChange={(e)=>setImg(e.target.value)} placeholder='Blog Image...' className=' border-b-2 border-slate-700 outline-none p-2'/>
            <button className='px-4 py-1 bg-slate-900 text-white'>Create</button>
        </form>
        </div>
    </div>
  )
}

export default Create