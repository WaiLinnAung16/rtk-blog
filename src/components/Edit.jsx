import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEditBlogMutation, useGetBlogDetailQuery } from '../rtkQuery/blogApi'

const Edit = () => {
    const {id} = useParams()
    const [editBlog] = useEditBlogMutation();
    const {data:blog} = useGetBlogDetailQuery(id);
    const [title,setTitle] = useState('')
    const [description,setDesc] = useState('')
    const [image,setImg] = useState('')
    const nav = useNavigate();
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const blog = {id,title,description,image};
        editBlog(blog);
        nav('/')
    } 
    useEffect(()=>{
        setTitle(blog?.title);
        setDesc(blog?.description);
        setImg(blog?.image);
    },[blog])
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center shadow-lg p-5'>
        <h1 className='font-bold text-sky-500'>Edit Form</h1>
        <form onSubmit={onSubmitHandler} className='flex flex-col gap-3 w-96'>
            <input type="text" defaultValue={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Blog title...' className=' border-b-2 border-slate-700 outline-none p-2'/>
            <input type="text" defaultValue={description} onChange={(e)=>setDesc(e.target.value)} placeholder='Blog Description...' className=' border-b-2 border-slate-700 outline-none p-2'/>
            <input type="text" defaultValue={image} onChange={(e)=>setImg(e.target.value)} placeholder='Blog Image...' className=' border-b-2 border-slate-700 outline-none p-2'/>
            <button className='px-4 py-1 bg-slate-900 text-white'>Confirm</button>
        </form>
        </div>
    </div>
  )
}

export default Edit