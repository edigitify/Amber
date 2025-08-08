import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Componentes/Navbar/navbar'
import Home from './Componentes/Pages/Home'
import About from './Componentes/Pages/About'
import Products from './Componentes/Pages/Products'
import Contact from './Componentes/Pages/Contact'
import Partner from './Componentes/Pages/Partner'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/packages" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/partner" element={<Partner />} />
          </Routes>
        </main>
        
      </div>
    </Router>
  )
}

export default App
