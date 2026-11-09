import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
    return (
        <>

            <div>
                <h1>Home</h1>
                <button>
                    <Link to="/courses">go to courses for more</Link>
                </button>
            </div>


        </>
    )
}

export default Home