import { useState } from 'react'
import { useEffect } from 'react'
import Comment from '../components/Comment'

function Comments() {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => setError(error))
  }, []);

  return (
    <div className="page">
      <h1>Comments</h1>
      <Comment comments={comments} />
    </div>
  )
}

export default Comments
