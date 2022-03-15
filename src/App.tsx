import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home/Home'
import { About } from './components/About/About'
import { DarkModeButton } from './components/DarkMode/DarkModeButton'

function App() {
  return (
    <div className="container w-full mx-auto text-dark font-poppins dark:text-white">
      <DarkModeButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
