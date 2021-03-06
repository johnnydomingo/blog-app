import { useState, useEffect } from 'react';
import './PostDetail.css';
import Layout from '../../components/Layout/Layout';
import { getPost, deletePost } from '../../services/posts';
import { useParams, Link } from 'react-router-dom';

const PostDetail = (props) => {

  const [post, setPost] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams()

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id)
      setPost(post)
      setLoaded(true)
    }
    fetchPost()
  }, [id])

  if (!isLoaded) {
    return <h1>Loading...</h1>
  }


  return (
    <Layout>
      <div className='detail'>
        <div className='title'>{post.title}</div>
        <div className='author'>{post.author}</div>
        <div className='content'>{post.content}</div>
        <div className='button-container'>
        <Link className='edit-link' to={`/posts/${post._id}/edit`}>
          <button className='edit-button'>Edit</button>
        </Link>
        <Link className='delete-link' to={`/`}>
          <button className='delete-button' onClick={() => deletePost(post._id)}>Delete</button>
        </Link>
        </div>
      </div>
    </Layout>
  )
}

export default PostDetail