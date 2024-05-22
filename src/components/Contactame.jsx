// src/components/Contactame.jsx
import React, { useState } from 'react';

function Contactame() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías manejar el envío del formulario, como enviar los datos a un servidor
    console.log({ nombre, correo, mensaje });
    alert('Mensaje enviado!');
  };

  return (
    <div className="bg-white p-8">
      <h2 className="text-4xl font-didact mb-8">Ponerse en contacto</h2>
      <p className="mb-8">En este espacio, puedes dejarme saber si tienes alguna crítica, algún comentario, sugerencia o duda. Estoy dispuesta a conocer tu voz y saber qué piensas de mí y mi trabajo.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-bold mb-2" htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            className="w-full p-2 border border-gray-300 rounded"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-bold mb-2" htmlFor="correo">Correo Electrónico</label>
          <input
            type="email"
            id="correo"
            className="w-full p-2 border border-gray-300 rounded"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-bold mb-2" htmlFor="mensaje">Comentario</label>
          <textarea
            id="mensaje"
            className="w-full p-2 border border-gray-300 rounded"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-[#E3CD0E] text-black p-2 rounded hover:bg-[#d4b90d]"
        >
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
}

export default Contactame;

