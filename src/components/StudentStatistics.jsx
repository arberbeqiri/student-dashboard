import React from 'react'
import StudentCard from './StudentCard'

function StudentStatistics() {
    return (
        <div className="student-grid">
            <StudentCard title="John Doe" course="Mathematics" grade="A" result="Passed" project="Completed" />
            <StudentCard title="John Doe" course="Mathematics" grade="A" result="Passed" project="Completed" />
            <StudentCard title="John Doe" course="Mathematics" grade="A" result="Passed" project="Completed" />
            <StudentCard title="John Doe" course="Mathematics" grade="A" result="Passed" project="Completed" />
        </div>

    )
}

export default StudentStatistics
