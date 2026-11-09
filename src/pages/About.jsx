import React from 'react'
import { Link } from 'react-router-dom'
function About() {
    return (
        <>
            <div>
                <h1>About</h1>
            </div>
            <button>
                <Link to="/">go back home</Link>
            </button>
        </>
    )
}

export default About