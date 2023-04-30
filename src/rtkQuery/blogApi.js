import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const blogApi = createApi({
    reducerPath:'blogApi',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:3000'}),
    tagTypes:['blog'],
    endpoints:(builder)=>({
        getBLogs: builder.query({
            query: () => '/blogs',
            providesTags:['blog']
        }),
        getBlogDetail: builder.query({
            query: (id) => `/blogs/${id}`,
            providesTags:['blog']
        }),
        createBlog: builder.mutation({
            query: (blog)=>({
                url:`/blogs`,
                method:'POST',
                body:blog
            }),
            invalidatesTags:['blog']
        }),
        editBlog: builder.mutation({
            query: (newData) => ({
                url:`/blogs/${newData.id}`,
                method:'PATCH',
                body:newData,
            }),
            invalidatesTags:['blog']
        }),
        deleteBlog: builder.mutation({
            query: (id) => ({
                url:`/blogs/${id}`,  
                method:'DELETE'
            }),
            invalidatesTags:['blog']
        })
    })
})

export const {useGetBLogsQuery,useGetBlogDetailQuery,useCreateBlogMutation,useDeleteBlogMutation,useEditBlogMutation} = blogApi