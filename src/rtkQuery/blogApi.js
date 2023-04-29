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
        })
    })
})

export const {useGetBLogsQuery,useGetBlogDetailQuery} = blogApi