import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home/Home'
import { About } from './components/About/About'

function App() {
  return (
    <div className="text-dark font-poppins dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
