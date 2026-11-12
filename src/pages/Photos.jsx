import { useState } from 'react'
import { useEffect } from 'react'
import Photo from '../components/Photo'

function Photos() {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((data) => setPhotos(data.slice(0, 100)))
      .catch((error) => setError(error))
  }, []);

  return (
    <div className="page">
      <h1>Photos</h1>
      <Photo photos={photos} />
    </div>
  )
}

export default Photos
