// React import not required with the new JSX transform
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Welcome from './pages/Welcome'
import AboutMe from './pages/AboutMe'
import MySongs from './pages/MySongs'
import MyStories from './pages/MyStories'
import MyShapes from './pages/MyShapes'
import MyReviews from './pages/MyReviews'

function App() {
  return (
    <Router basename="/all-about-me">
      <Layout>
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
