import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import MovieList from './components/MovieList.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Header count={count} />
      <MovieList setCount={setCount} />
    </div>
  )
}

export default App
