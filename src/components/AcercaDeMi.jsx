import React from 'react';
import { motion } from 'framer-motion';
import acercaDeMiImage from '../assets/AcercaDeMi.jpg';  // Importa la imagen

const AcercaDeMi = () => {
  return (
    <div className="bg-white p-8 relative overflow-hidden min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ rotate: 0, scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="md:mr-12 mb-8 md:mb-0"
        >
          <div className="w-80 h-80 bg-[#C6A42B] rounded-full flex items-center justify-center overflow-hidden">
            <img 
              src={acercaDeMiImage} 
              alt="Lina Viveros" 
              className="object-cover h-full w-full"
            />
          </div>
        </motion.div>
        <div className="text-center md:text-left md:w-1/2">
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-[#4D0707] text-3xl font-didact mb-4"
          >
            Bienvenid@ a esta pequeña introducción acerca de mí
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg mb-4"
          >
            Hola, soy Lina. Soy estudiante de ingeniería de software, me encanta aprender. Me caracterizo por la obsesión positiva a las cosas que me apasionan.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default AcercaDeMi;
