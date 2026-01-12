import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import HealthTestPage from './pages/HealthTestPage'
import CreatePostTestPage from './pages/CreatePostTestPage'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/test-health" element={<HealthTestPage />} />
      <Route path="/test-create-post" element={<CreatePostTestPage />} />   
    </Routes>
  )
}

App.displayName = "App"

export default App