import React from 'react'

function Post({ posts }) {
    return (
        <div className="list">
            {posts.map((post) => (
                <div key={post.id} className="card">
                    <h2>{post.title}</h2>
                    <p>ID: {post.id}</p>
                    <p>User ID: {post.userId}</p>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    )
}

export default Post
