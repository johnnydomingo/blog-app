//This would be for out Posts screen
//Condensed version of the Post Detail

//Title, Author, Text Summary -set by characters, url-pics
//Link to the Posts

import './PostCard.css'
import { Link } from 'react-router-dom'

const PostCard = (props) => {
  return (
    <div className="post-card">
      <Link className="card" to={`/posts/${props._id}`}>
        <div className="post-header">
          <h3 className="post-card-title">{props.title}</h3>
          <h5 className="post-card-author">{props.author}</h5>
        </div>
        <p className="post-card-text">{props.content.substring(0, 200)}...</p>
      </Link>
    </div>
  )
}

export default PostCard