import { useState } from 'react'
import Home from './pages/Home'
import Github from './pages/Github'
import './App.css'


function App() {
  const [page, setPage] = useState('home')

  return (
    <>
      {page === 'home' ? <Home onNavigate={setPage} /> : <Github onNavigate={setPage} />}
    </>
  )
}

export default App
