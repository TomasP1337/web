import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Sluzby from './pages/Sluzby';
import Cenik from './pages/Cenik';
import Kontakt from './pages/Kontakt';
import './app.css';

export default function App() {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li><Link to="/">O nás</Link></li>
            <li><Link to="/sluzby">Služby</Link></li>
            <li><Link to="/cenik">Ceník</Link></li>
            <li><Link to="/kontakt">Kontakt</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sluzby" element={<Sluzby />} />
        <Route path="/cenik" element={<Cenik />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
    </Router>
  );
}
