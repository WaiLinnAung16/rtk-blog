import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blog from './components/Blog'
import { useGetBLogsQuery } from './rtkQuery/blogApi'
import Detail from './components/Detail'

const App = () => {
  const {data} = useGetBLogsQuery();
  console.log(data);
  return (
    <div>
      <Routes>
        <Route path='/' element={<Blog/>}/>
        <Route path='/blogs/:id' element={<Detail/>}/>
      </Routes>
    </div>
  )
}

export default App