import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/posts">Posts</NavLink>
            <NavLink to="/comments">Comments</NavLink>
            <NavLink to="/photos">Photos</NavLink>
        </nav>
    )
}

export default Navbar
