import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import Layout from './components/Layout'
import Welcome from './pages/Welcome'
import AboutMe from './pages/AboutMe'
import MySongs from './pages/MySongs'
import MyStories from './pages/MyStories'
import MyShapes from './pages/MyShapes'
import MyReviews from './pages/MyReviews'

const RestoreRoute = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const stored = sessionStorage.getItem('rafi-redirect-path')
    if (stored) {
      sessionStorage.removeItem('rafi-redirect-path')
      const target = stored.startsWith('/') ? stored : `/${stored}`
      if (target !== window.location.pathname + window.location.search + window.location.hash) {
        navigate(target, { replace: true })
      }
    }
  }, [navigate])

  return null
}

function App() {
  return (
    <Router basename="/all-about-me">
      <Layout>
        <RestoreRoute />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/uts-1" element={<AboutMe />} />
          <Route path="/uts-2" element={<MySongs />} />
          <Route path="/uts-3" element={<MyStories />} />
          <Route path="/uts-4" element={<MyShapes />} />
          <Route path="/uts-5" element={<MyReviews />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
