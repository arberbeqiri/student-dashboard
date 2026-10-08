import React from 'react'

function StudentCard({ title, course, grade, result, project }) {
  return (
    <div className="student-card">
      <div className="student-header">
        <div className="avatar">{title.charAt(0)}</div>
        <div>
          <h2>{title}</h2>
          <p>{course}</p>
        </div>
      </div>
      <div className="student-info">
        <div className="info-box">
          <p>Grade</p>
          <h3>{grade}</h3>
        </div>
        <div className="info-box">
          <p>Result</p>
          <h3 className={result === 'Passed' ? 'passed' : 'failed'}>{result}</h3>
        </div>
        <div className="info-box">
          <p>Project</p>
          <h3>{project}</h3>
        </div>
      </div>
    </div>
  )
}

export default StudentCard
