import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Github from './pages/Github'
import './App.css'
import ConnectUS from './pages/ConnectUS'
import Resume from './pages/Resume'
import FeedBack from './pages/FeedBack'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/github" element={<Github />} />
        <Route path="/connectUS" element={<ConnectUS />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/feedback" element={<FeedBack />} />
      </Routes>
    </Router>
  )
}

export default App
