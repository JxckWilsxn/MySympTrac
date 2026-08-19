import { useState } from 'react'
//import { Routes, Route } from 'react-router-dom'
//import { NavBar } from '../components/ui/Navbar'
import { SignIn } from '../components/ui/SignIn'
import { HomeScreen } from './HomeScreen';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const [view, setView] = useState('signin');

  const handleAuthSuccess = () => {
    setView('home');
  }

  return (
    <>
      <main>
        <ToastContainer />
        {view === 'signin' ? 
          <SignIn onAuthSuccess={handleAuthSuccess}/> 
          : 
          <HomeScreen />
        }
        
        {/* <NavBar /> 
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<div>Home Page</div>} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
        </Routes>
        */}
      </main>
    </>
  )
}

export default App

