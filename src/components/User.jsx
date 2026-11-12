import React from 'react'

function User({ users }) {
    return (
        <div>
            {users.map((user) => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <p>ID: {user.id}</p>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                    <p>Website: {user.website}</p>
                    <p>Geo: {user.address.geo.lat}, {user.address.geo.lng}</p>
                    <p>Company: {user.company.name}, {user.company.catchPhrase}, {user.company.bs}</p>

                </div>
            ))}
        </div>
    )
}

export default User