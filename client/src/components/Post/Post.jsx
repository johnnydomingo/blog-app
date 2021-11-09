//For the Post Details Screen
/*
Title
Author
Content

*/

import { Link } from "react-router-dom";
import "./Post.css"

const Post = (props) => {
  return (
    <div>
      <Link className="post" to={`/posts/${props._id}`}>
        <div className="post-title">{props.title}</div>
        <div className="post-author">{props.author}</div>
        <div className="post-content">{props.content}</div>
      </Link>
    </div>
  )
};

export default Post
