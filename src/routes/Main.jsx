import { BrowserRouter as Routes, Route } from 'react-router-dom';
import Inicio from './../pages/Inicio';
import Nosotros from './../pages/Nosotros';
import Contacto from './../pages/Contacto';

const Main = () => {
    return (
    <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
    </Routes>
    )
}

export default Main