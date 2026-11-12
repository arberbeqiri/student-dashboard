import { useState } from 'react'
import { useEffect } from 'react'
import Post from '../components/Post'

function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => setError(error))
  }, []);

  return (
    <div className="page">
      <h1>Posts</h1>
      <Post posts={posts} />
    </div>
  )
}

export default Posts
