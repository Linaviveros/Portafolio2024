import React from 'react';
import Header from './components/Header';
import Inicio from './components/Inicio';
import AcercaDeMi from './components/AcercaDeMi';
import Servicios from './components/Servicios';
import Portafolio from './components/Portafolio';
import Testimonios from './components/Testimonios';
import Blog from './components/Blog';
import Contactame from './components/Contactame';

function App() {
  return (
    <div>
      <Header />
      <section id="inicio"><Inicio /></section>
      <section id="acercaDeMi"><AcercaDeMi /></section>
      <section id="servicios"><Servicios /></section>
      <section id="portafolio"><Portafolio /></section>
      <section id="testimonios"><Testimonios /></section>
      <section id="blog"><Blog /></section>
      <section id="contactame"><Contactame /></section>
    </div>
  );
}

export default App;
