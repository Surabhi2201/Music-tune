import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { SignUp } from './pages/SignUp'
import { SignIn } from './pages/SignIn'
import { DashBoard } from './pages/DashBoard'
import { MainMusicPlayer } from './pages/MainMusicPlayer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/dashboard" element={<DashBoard/>} />
          <Route path="/musicplayer" element={<MainMusicPlayer/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
