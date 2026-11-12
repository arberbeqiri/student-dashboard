import { useState, useEffect } from 'react'

function Home() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(false);

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
        <div className="card">Posts: {posts.length}</div>
        <div className="card">Comments: {comments.length}</div>
        <div className="card">Photos: {photos.length}</div>
      </div>
    </div>
  )
}

export default Home;
