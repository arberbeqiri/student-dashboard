import React from 'react'
import { Link } from 'react-router-dom'

function Courses() {
    return (
        <>
            <div>
                <h1>Courses</h1>
            </div>
            <button>
                <Link to="/contact">go to contact for more</Link>
            </button>
        </>
    )
}

export default Courses