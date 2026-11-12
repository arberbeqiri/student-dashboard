import React from 'react'

function Photo({ photos }) {
    return (
        <div className="grid">
            {photos.map((photo) => (
                <div key={photo.id} className="card">
                    <h2>{photo.title}</h2>
                    <p>ID: {photo.id}</p>
                    <p>Album ID: {photo.albumId}</p>
                    <img src={`https://picsum.photos/seed/${photo.id}/150`} alt={photo.title} />
                </div>
            ))}
        </div>
    )
}

export default Photo
