import React from 'react'
import StatCard from './StatCard'

function Statistics() {
  return (
    <div className="statistics">
      <StatCard title="Total Students" value="1,200" stat="20% increase from last month" color="blue" />
      <StatCard title="Active Students" value="800" stat="10% increase from last month" color="green" />
      <StatCard title="Inactive Students" value="400" stat="5% decrease from last month" color="red" />

    </div>
  )
}

export default Statistics