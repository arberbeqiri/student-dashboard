import Header from './components/Header'
import Statistics from './components/Statistics'
import './App.css'
import StudentStatistics from './components/StudentStatistics'

function App() {
  return (
    <div className="app">
      <Header />
      <Statistics />
      <StudentStatistics />
    </div>
  )
}

export default App