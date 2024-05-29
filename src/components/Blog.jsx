import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import imagen1 from '../assets/imagen1.jpg';  // Cambia los nombres según corresponda
import imagen2 from '../assets/imagen2.jpg';  // Cambia los nombres según corresponda
import imagen3 from '../assets/imagen3.jpg';  // Cambia los nombres según corresponda

const Blog = () => {
  return (
    <div className="bg-white dark:bg-white p-8 relative overflow-hidden min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-3xl text-justify mb-8">
        <h2 className="text-[#4D0707] dark:text-[#4D0707] text-3xl font-didact mb-4 text-center">
          Más sobre mí
        </h2>
        <p className="text-lg mb-4 dark:text-black">
          Además de programar, me gusta cantar y bailar en los carnavales que se celebran en mi ciudad, y para ser más específica, en un pueblo de mi región donde reside la gran mayoría de mi familia. Lo hago todos los años y me divierto bastante. Si no hubiera elegido esta carrera, me encantaría estudiar gastronomía. Soy una persona muy alegre y extrovertida. Disfruto explorando diferentes lugares de mi ciudad y los paisajes que estos ofrecen.
        </p>
      </div>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        useKeyboardArrows
        autoPlay
        className="w-full max-w-lg mx-auto"
      >
        <div>
          <img src={imagen1} alt="Carnaval 1" className="object-cover h-68 w-full rounded-md" />
        </div>
        <div>
          <img src={imagen2} alt="Carnaval 2" className="object-cover h-68 w-full rounded-md" />
        </div>
        <div>
          <img src={imagen3} alt="Carnaval 3" className="object-cover h-68 w-full rounded-md" />
        </div>
      </Carousel>
    </div>
  );
};

export default Blog;
