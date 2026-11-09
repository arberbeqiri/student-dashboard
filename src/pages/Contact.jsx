import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
    return (
        <>
            <div>
                <h1>Contact</h1>
            </div>
            <button>
                <Link to="/about">go to about for more</Link>
            </button>
        </>
    )
}

export default Contact
