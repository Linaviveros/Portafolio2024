import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg dark:bg-white' : 'bg-transparent'}`}>
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="hidden md:flex w-full justify-center">
          <ul className="flex space-x-4">
            <li><Link to="inicio" smooth={true} duration={500} className="cursor-pointer text-[#991A1A] dark:text-[#991A1A]">Inicio</Link></li>
            <li><Link to="acercaDeMi" smooth={true} duration={500} className="cursor-pointer text-[#991A1A] dark:text-[#991A1A]">Acerca de Mi</Link></li>
            <li><Link to="servicios" smooth={true} duration={500} className="cursor-pointer text-[#991A1A] dark:text-[#991A1A]">Servicios</Link></li>
            <li><Link to="portafolio" smooth={true} duration={500} className="cursor-pointer text-[#991A1A] dark:text-[#991A1A]">Portafolio</Link></li>
            <li><Link to="testimonios" smooth={true} duration={500} className="cursor-pointer text-[#991A1A] dark:text-[#991A1A]">Testimonios</Link></li>
            <li><Link to="blog" smooth={true} duration={500} className="cursor-pointer text-[#991A1A] dark:text-[#991A1A]">Blog</Link></li>
            <li><Link to="contactame" smooth={true} duration={500} className="cursor-pointer text-[#991A1A] dark:text-[#991A1A]">Contáctame</Link></li>
          </ul>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-2xl text-[#991A1A] dark:text-[#991A1A]">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-white shadow-lg absolute top-16 left-0 w-full z-50">
          <ul className="flex flex-col items-center space-y-4 p-4">
            <li><Link to="inicio" smooth={true} duration={500} className="cursor-pointer text-[#991A1A] dark:text-[#991A1A]" onClick={toggleMenu}>Inicio</Link></li>
            <li><Link to="acercaDeMi" smooth={true} duration={500} className="cursor-pointer text-[#991A1A] dark:text-[#991A1A]" onClick={toggleMenu}>Acerca de Mi</Link></li>
            <li><Link to="servicios" smooth={true} duration={500} className="cursor-pointer text-[#991A1A] dark:text-[#991A1A]" onClick={toggleMenu}>Servicios</Link></li>
            <li><Link to="portafolio" smooth={true} duration={500} className="cursor-pointer text-[#991A1A] dark:text-[#991A1A]" onClick={toggleMenu}>Portafolio</Link></li>
            <li><Link to="testimonios" smooth={true} duration={500} className="cursor-pointer text-[#991A1A] dark:text-[#991A1A]" onClick={toggleMenu}>Testimonios</Link></li>
            <li><Link to="blog" smooth={true} duration={500} className="cursor-pointer text-[#991A1A] dark:text-[#991A1A]" onClick={toggleMenu}>Blog</Link></li>
            <li><Link to="contactame" smooth={true} duration={500} className="cursor-pointer text-[#991A1A] dark:text-[#991A1A]" onClick={toggleMenu}>Contáctame</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
