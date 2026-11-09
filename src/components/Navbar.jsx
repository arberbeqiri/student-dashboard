import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="logo">
                <span className="logo-text">SchoolHub</span>
            </Link>

            <div className="nav-links">
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/courses">Courses</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
        </nav>
    )
}

export default Navbar
