import { useState } from 'react'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import './App.css'
import category from './assets/categoria1.jpg';
import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import Tienda from './pages/Tienda';
import Blog from './pages/Blog';
import Galeria from './pages/Galeria';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <header>
        <h1>Tienda de Muebles</h1>
      </header>

      <Router>
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/nosotros">Acerca De</Link></li>
            <li><Link to="/tienda">Tienda</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/galeria">Galería</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </nav>
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/tienda" element={<Tienda />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Router>


      <h2>Nuestros Productos</h2>
      
      <h2>Producto</h2>
      <img src={category} alt="category one" />
      <a href="https://www.google.com">Google</a>




    </div>
  )
}

export default App
