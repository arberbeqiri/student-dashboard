import React from 'react'
import movies from '../data/movie.js'
import MovieCard from './MovieCard.jsx'

function MovieList({ setCount }) {
    return (
        <section>
            <div className="section-header">
                <p className="section-label">
                    tonight's movies
                </p>
                <h2>movies</h2>
                <p>{movies.length} movies available</p>
            </div>
            <div className="movie-grid">
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        title={movie.title}
                        category={movie.category}
                        time={movie.time}
                        hall={movie.hall}
                        price={movie.price}
                        avalible={movie.avalible}
                        style={movie.style}
                        setCount={setCount}
                    />
                ))}
            </div>
        </section>
    )
}

export default MovieList