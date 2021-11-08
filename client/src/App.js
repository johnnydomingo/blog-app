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
        <Route exact path="/" component={Posts} />
        <Route path="/create-post" component={PostCreate} />
        <Route exact path="/post/:id/edit" component={PostEdit} />
        <Route exact path="/post/:id" component={PostDetail} />
      </Routes>
    </div>
  )
}

export default App
