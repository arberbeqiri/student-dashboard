import { useState } from 'react'

function MovieCard({
    title,
    category,
    time,
    hall,
    price,
    avalible,
    style,
    setCount
}) {
    const [selected, setSelected] = useState(false)

    return (
        <div className="movie-card">
            <div className={`movie-poster ${style}`}>
                <div className="poster-content">
                    <span className="category">{category}</span>
                    <h2>{title}</h2>
                </div>
            </div>
            <div className="movie-content">
                <div className="movie-details">
                    <div>
                        <p>{time} | {hall}</p>
                        <p>Price: ${price.toFixed(2)}</p>
                        <p>{price > 10 ? 'Bad price' : 'Good price'}</p>
                    </div>
                    <span className={avalible ? 'availability available' : 'availability sold-out'}>
                        {avalible ? 'Available' : 'Not Available'}
                    </span>
                </div>
                {avalible ? (
                    <button
                        className={selected ? 'watch-button selected' : 'watch-button'}
                        onClick={() => {
                            setSelected(!selected)
                            setCount((count) => selected ? count - 1 : count + 1)
                        }}
                    >
                        {selected ? 'Selected' : 'Watch'}
                    </button>
                ) : (
                    <button className="disabled-button" disabled>
                        Not Available
                    </button>
                )}
            </div>
        </div>
    )
}

export default MovieCard
