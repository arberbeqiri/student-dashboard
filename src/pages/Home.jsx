import { useState } from 'react'
import { useEffect } from 'react'

function Home() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => setError(error))

    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => setError(error))

    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((data) => setPhotos(data))
      .catch((error) => setError(error))
  }, []);

  return (
    <div className="page">
      <h1>Home</h1>
      <div className="stats">
        <p className="card">Posts: {posts.length}</p>
        <p className="card">Comments: {comments.length}</p>
        <p className="card">Photos: {photos.length}</p>
      </div>
    </div>
  )
}

export default Home
