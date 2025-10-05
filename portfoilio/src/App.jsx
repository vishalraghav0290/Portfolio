import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Github from './pages/Github'
import './App.css'
import ConnectUS from './pages/ConnectUS'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/github" element={<Github />} />
        <Route path="/connectUS" element={<ConnectUS />} />
      </Routes>
    </Router>
  )
}

export default App
