//setstate Post - title, author, content
//setstate IsCreated
//Form design
//Import layout
//handle change to set Post
//handle submit to set created

import { useState } from 'react'
import './PostCreate.css'
import Layout from '../../components/Layout/Layout.jsx'
import { Navigate } from 'react-router-dom'
import { createPost } from '../../services/posts.js'

const PostCreate = (props) => {

  const [post, setPost] = useState({
    title: '',
    author: '',
    content: ''
  })

  const [isCreated, setCreated] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setPost({
      ...post,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const created = await createPost(post)
    setCreated({ created })
  }

  if (isCreated) {
    return <Navigate to='/' />
  }
  return (
    <Layout>
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          className="input-title"
          placeholder="Title"
          value={post.title}
          name='title'
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className="input-author"
          placeholder="Author"
          value={post.author}
          name='author'
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className="input-content"
          placeholder="Content"
          value={post.content}
          name='content'
          required
          autoFocus
          onChange={handleChange}
        />
        <button type='submit' className="submit-button">
          Submit
        </button>
      </form>
    </Layout>
  )
}

export default PostCreate