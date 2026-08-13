import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { NavBar } from '../components/ui/Navbar'
import { Login } from './login.jsx'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <NavBar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<div>Home Page</div>} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
        </Routes>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </main>
    </>
  )
}

export default App