
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Client from './pages/Client'
import Providers from './pages/Providers'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/client" element={<Client />} />
        <Route path="/provider" element={<Providers />} />
      </Routes>
    </>
  )
}

export default App
