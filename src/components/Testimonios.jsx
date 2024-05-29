import React from 'react';
import { motion } from 'framer-motion';

const testimonios = [
  {
    mensaje: "Lina es una estudiante excepcional. Siempre está dispuesta a aprender y a ayudar a los demás.",
    nombre: "Profesor A",
    estrellas: 5,
  },
  {
    mensaje: "El desempeño de Lina en mis clases ha sido sobresaliente. Recomiendo altamente su trabajo.",
    nombre: "Profesor B",
    estrellas: 4,
  },
  {
    mensaje: "Lina tiene una gran actitud y siempre entrega sus proyectos a tiempo con gran calidad.",
    nombre: "Profesor C",
    estrellas: 5,
  },
];

const starIcons = (count) => {
  return Array.from({ length: count }, (_, i) => (
    <span key={i} className="text-yellow-500">★</span>
  ));
};

const Testimonios = () => {
  return (
    <div className="bg-white p-8 dark:bg-white">
      <h2 className="text-center text-xl font-didact mb-8 text-[#4D0707] dark:text-[#4D0707]">
        En este espacio encontrarás los testimonios de mis docentes con respecto a mi desempeño en las diferentes áreas de la programación que he visto en los semestres cursados
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonios.map((testimonio, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-100 p-6 rounded-lg shadow-lg dark:bg-gray-100"
          >
            <p className="mb-4 text-justify">"{testimonio.mensaje}"</p>
            <div className="text-right">
              <p className="text-lg font-bold text-black dark:text-black">{testimonio.nombre}</p>
              <div className="text-yellow-500">
                {starIcons(testimonio.estrellas)}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonios;
