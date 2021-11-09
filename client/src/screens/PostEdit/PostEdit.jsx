import { useState, useEffect } from 'react'
import './PostEdit.css'
import { useParams, Navigate } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import { getPost, updatePost } from '../../services/posts'

const PostEdit = (props) => {
    const [post, setPost] = useState({
        title: '',
        author: '',
        content: ''
    })

    const [isUpdated, setUpdated] = useState(false)
    let { id } = useParams()

    useEffect(() => {
        const fetchPost = async () => {
            const post = await getPost(id)
            setPost(post)
        }
        fetchPost()
    }, [id])

    const handleChange = (event) => {
        const { name, value } = event.target 
        setPost({
            ...post,
            [name]: value,
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const updated = await updatePost(id, post)
        setUpdated(updated)
    }

    if (isUpdated) {
        return <Navigate to={`/posts/${id}`} />
    }

    return (
        <Layout>
            <div className='post-edit'>
                <form className='edit-form' onSubmit={handleSubmit}>
                    <input
                        className='input-title'
                        placeholder='Title'
                        value={post.title}
                        name='title'
                        required
                        autoFocus
                        onChange={handleChange}
                    />
                    <input
                        className='input-author'
                        placeholder='Author'
                        value={post.author}
                        name='author'
                        required
                        onChange={handleChange}
                    />
                    <textarea
                        className='textarea-content'
                        rows={10}
                        cols={78}
                        placeholder='Content'
                        value={post.content}
                        name='content'
                        required
                        onChange={handleChange}
                    />
                    <button type='submit' className='save-button'>
                        Save
                    </button>
                </form>
            </div>
        </Layout>
    )
}

export default PostEdit;