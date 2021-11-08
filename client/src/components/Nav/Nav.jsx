// Link to Posts page - "/"
// Link to "/" from Logo
// Link to PostCreate

import './Nav.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <div className="nav-links">
        <NavLink to="/">SaltySnacks</NavLink>
        <NavLink to="/create-post">New Post</NavLink>
      </div>
    </nav>
  )
}

export default Nav