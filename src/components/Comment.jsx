import React from 'react'

function Comment({ comments }) {
    return (
        <div className="list">
            {comments.map((comment) => (
                <div key={comment.id} className="card">
                    <h2>{comment.name}</h2>
                    <p>ID: {comment.id}</p>
                    <p>Post ID: {comment.postId}</p>
                    <p>Email: {comment.email}</p>
                    <p>{comment.body}</p>
                </div>
            ))}
        </div>
    )
}

export default Comment
