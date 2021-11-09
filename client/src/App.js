import React from 'react'
import './App.css'
import Posts from './screens/Posts/Posts'
import PostCreate from './screens/PostCreate/PostCreate'
import PostEdit from './screens/PostEdit/PostEdit'
import PostDetail from './screens/PostDetail/PostDetail'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Posts />} />
        <Route path="/create-post" element={<PostCreate />} />
        <Route exact path="/post/:id/edit" element={<PostEdit />} />
        <Route exact path="/post/:id" element={<PostDetail />} />
      </Routes>
    </div>
  )
}

export default App
