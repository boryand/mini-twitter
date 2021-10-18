import React from 'react'
import { NavLink } from 'react-router-dom'

function LeftPane() {
    return (
      
        <div>
      <div >
        <header>twitter</header>

        <nav className='navigation'>
          <NavLink to="/">
            <span> Home</span>
          </NavLink>
          <NavLink to="/explore" >
            <span> Explore</span>
          </NavLink>
          <NavLink to="/notifications">
            <span> Notifications</span>
          </NavLink>
          <NavLink to="/messages">
            <span> Messages</span>
          </NavLink>
          <NavLink to="/bookmarks">
            <span> Bookmarks</span>
          </NavLink>
          <NavLink to="/lists">
            <span> Lists</span>
          </NavLink>
          <NavLink to="/profile">
            <span> Profile</span>
          </NavLink>
          <button className="more">
            <span> More</span>
          </button>
        </nav>

      </div>
    </div>
  )
}
    


export default LeftPane;
