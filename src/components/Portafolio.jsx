// src/components/Portafolio.jsx
import React from 'react';

function Portafolio() {
  return (
    <div className="bg-white p-8">
      <h2 className="text-2xl font-didact mb-8">Portafolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-[#FBF5C1] p-4 rounded-lg shadow-lg">
          <p>Sistema que elimina, agrega y modifica recetas, este verifica si hay ingredientes existentes para dicha receta y también da la descripción final de lo que tendrá esta misma.</p>
        </div>
        <div className="bg-[#FBF5C1] p-4 rounded-lg shadow-lg">
          <p>Sistema de gestión de inventario donde se puede ver el tipo de producto, nombre del producto y precio del producto.</p>
        </div>
        <div className="bg-[#FBF5C1] p-4 rounded-lg shadow-lg">
          <p>Interfaz gráfica de estructura de datos.</p>
        </div>
      </div>
    </div>
  );
}

export default Portafolio;
