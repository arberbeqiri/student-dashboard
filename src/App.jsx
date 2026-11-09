import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import { useState } from 'react'
import './App.css'
import Home from './pages/Home.jsx'
import Courses from './pages/Courses.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Notfound from './pages/Notfound.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />

      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Notfound />} />

        </Routes>
      </main>
    </>

  )
}

export default App
