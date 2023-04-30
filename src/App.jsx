import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blog from './components/Blog'
import { useGetBLogsQuery } from './rtkQuery/blogApi'
import Detail from './components/Detail'
import Create from './components/Create'
import Edit from './components/Edit'

const App = () => {
  const {data} = useGetBLogsQuery();
  console.log(data);
  return (
    <div>
      <Routes>
        <Route path='/' element={<Blog/>}/>
        <Route path='/blogs/:id' element={<Detail/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='/create' element={<Create/>}/>

      </Routes>
    </div>
  )
}

export default App