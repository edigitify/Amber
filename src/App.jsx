import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Componentes/Navbar/navbar'
import Home from './Componentes/Pages/Home'
import About from './Componentes/Pages/About'
import Products from './Componentes/Pages/Products'
import Contact from './Componentes/Pages/Contact'
import Partner from './Componentes/Pages/Partner'
import './App.css'
import Footer from './Componentes/Pages/Footer';
import PrintedGlass from './Componentes/Pages/Printed';
import Transperent from './Componentes/Pages/Transperent';
import Opake from './Componentes/Pages/Opake';
import Frosted from './Componentes/Pages/GlassFilmsBanner';
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Products />}>
              {/* <Route path="/printed-glass-films" element={<PrintedGlass />} />  */}
              {/* <Route path="/transperent-glass-films" element={<Transperent />} /> */}
              {/* <Route path="/opaque-glass-films" element={<Opake />} />  */}
              {/* <Route path="/frosted-glass-films" element={<Frosted />} /> */}
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="/partner" element={<Partner />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
