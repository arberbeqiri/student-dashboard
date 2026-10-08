import React from 'react'

function StatCard({ title, value, stat, color }) {
    return (
        <div>
            <div className={`stat-card ${color}`}>
                <p className="stat-title">{title}</p>
                <h2 className="stat-value">{value}</h2>
                <p className="stat">{stat}</p>
            </div>
        </div>
    )
}

export default StatCard