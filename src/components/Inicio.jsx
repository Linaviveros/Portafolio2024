import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaGithub, FaWhatsapp } from 'react-icons/fa';
import imagenInicio from '../assets/imagen-inicio.jpg';

const Inicio = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white relative dark:bg-white">
      <motion.div
        className="absolute inset-0 z-0 animate-gradient"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="relative z-10 flex items-center justify-between max-w-4xl w-full mx-auto p-8 bg-gradient-to-r from-white to-[#FEEEB8] rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="text-left">
          <h1 className="text-4xl font-didact text-[#991A1A] dark:text-[#991A1A]">Hola, soy</h1>
          <h2 className="text-5xl font-didact text-black dark:text-black">Lina Viveros</h2>
          <div className="mt-4 flex space-x-4">
            <a href="https://www.facebook.com/LinaViveros" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-[#991A1A] dark:text-[#991A1A] w-8 h-8 hover:text-black transition duration-300" />
            </a>
            <a href="https://www.instagram.com/lina__vm" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-[#991A1A] dark:text-[#991A1A] w-8 h-8 hover:text-black transition duration-300" />
            </a>
            <a href="https://github.com/Linaviveros" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-[#991A1A] dark:text-[#991A1A] w-8 h-8 hover:text-black transition duration-300" />
            </a>
            <a href="https://wa.me/573145149674" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-[#991A1A] dark:text-[#991A1A] w-8 h-8 hover:text-black transition duration-300" />
            </a>
          </div>
        </div>
        <div className="relative w-48 h-48 md:w-72 md:h-72">
          <img
            src={imagenInicio}
            alt="Lina Viveros"
            className="absolute w-full h-full object-cover rounded-full shadow-lg"
            style={{ transform: 'rotate(10deg)' }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Inicio;
