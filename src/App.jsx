
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './componentesEstilosbroostrap/inicio.jsx'
import InicioRB from './componentesEstilosbroostrap/InicioRB.jsx'
import Ejercicio2 from './componentesEstilosbroostrap/Ejercicio2.jsx'
import Card from './componentesEstilosbroostrap/Card.jsx'
import CardRB from './componentesEstilosbroostrap/CardRB.jsx'
import Menuvertical from './componentesEstilosbroostrap/Menuvertical.jsx'

function App() {
  return (
    <BrowserRouter>
      <Menuvertical />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio-rb" element={<InicioRB />} />
          <Route path="/ejercicio2" element={<Ejercicio2 />} />
          <Route path="/card" element={<Card />} />
          <Route path="/card-rb" element={<CardRB />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
