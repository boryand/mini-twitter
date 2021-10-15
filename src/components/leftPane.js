import React from 'react'
import { NavLink } from 'react-router-dom'

function leftPane() {
    return (
        <div>
      <div >
        <header>{twitter}</header>

        <nav>
          <NavLink to="/">
            <span>{home} Home</span>
          </NavLink>
          <NavLink to="/explore" >
            <span>{explore} Explore</span>
          </NavLink>
          <NavLink to="/notifications">
            <span>{notifications} Notifications</span>
          </NavLink>
          <NavLink to="/messages">
            <span>{messages} Messages</span>
          </NavLink>
          <NavLink to="/bookmarks">
            <span>{bookmarks} Bookmarks</span>
          </NavLink>
          <NavLink to="/lists">
            <span>{lists} Lists</span>
          </NavLink>
          <NavLink to="/profile">
            <span>{profile} Profile</span>
          </NavLink>
          <button className="more">
            <span>{more} More</span>
          </button>
        </nav>

      </div>
    </div>
  )
}
    


export default leftPane
