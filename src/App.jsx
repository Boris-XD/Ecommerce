import { useState } from 'react'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import './App.css'
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
        <h1 className='nombre-sitio'>Tienda de <span>Muebles</span></h1>
      </header>

      <Router>
        <div className='nav-contenedor'>
          <nav className='nav-principal contenedor'>
              <Link to="/">Inicio</Link>
              <Link to="/nosotros">Acerca De</Link>
              <Link to="/tienda">Tienda</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/galeria">Galería</Link>
              <Link to="/contacto">Contacto</Link>
          </nav>
        </div>
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/tienda" element={<Tienda />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Router>
      <footer>
        <div>
          <h3>Categorías</h3>
          <nav>
            <a href="#">Cocina</a>
            <a href="#">Oficina</a>
            <a href="#">Jardín</a>
            <a href="#">Cochera</a>
            <a href="#">Dormitorios</a>
          </nav>
        </div>
        <div>
          <h3>Sobre Nosotros</h3>
          <nav>
            <a href="#">Nuestra historia</a>
            <a href="#">Misión</a>
            <a href="#">Carreras</a>
            <a href="#">Política de Privacidad</a>
            <a href="#">Términos del servicio</a>
          </nav>
        </div>
        <div>
          <h3>Soporte</h3>
            <a href="#">Preguntas frecuentes</a>
            <a href="#">Ayuda en Línea</a>
            <a href="#">Confianza y Seguridad</a>
        </div>
        <p>Todos los derechos reservados - 2023</p>
        </footer>
    </div>
  )
}

export default App
