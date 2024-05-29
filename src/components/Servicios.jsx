import React from 'react';
import { FaJava, FaPython, FaHtml5, FaAws, FaGitAlt } from 'react-icons/fa';
import { SiMysql, SiCplusplus, SiAzuredevops, SiFigma } from 'react-icons/si';

const servicios = [
  { icon: <FaJava className="text-6xl" />, name: 'Java' },
  { icon: <FaPython className="text-6xl" />, name: 'Python' },
  { icon: <SiMysql className="text-6xl" />, name: 'MySQL' },
  { icon: <FaHtml5 className="text-6xl" />, name: 'HTML' },
  { icon: <SiCplusplus className="text-6xl" />, name: 'C++' },
  { icon: <SiAzuredevops className="text-6xl" />, name: 'Azure DevOps' },
  { icon: <SiFigma className="text-6xl" />, name: 'Figma' },
  { icon: <FaGitAlt className="text-6xl" />, name: 'Git' }
];

const Servicios = () => {
  return (
    <div className="bg-white p-8 dark:bg-white">
      <h2 className="text-center text-xl font-didact mb-8 text-[#4D0707] dark:text-[#4D0707]">
        Estos son lenguajes y herramientas en las que he estado aprendiendo a lo largo de mis semestres académicos
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {servicios.map((servicio, index) => (
          <div key={index} className="bg-[#F9DD4C] p-6 rounded-lg flex flex-col items-center justify-center shadow-lg dark:bg-[#F9DD4C]">
            {servicio.icon}
            <span className="mt-4 text-lg font-didact text-black dark:text-black">{servicio.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicios;
