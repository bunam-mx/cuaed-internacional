import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para avanzar al siguiente índice
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Función para retroceder al índice anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Configurar el autoplay (opcional)
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Cambia cada 3 segundos
    return () => clearInterval(interval); // Limpiar intervalo al desmontar
  }, [currentIndex]);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Botón Anterior */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        {"<"}
      </button>

      {/* Imagen Actual */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="w-full h-auto rounded-lg shadow-md"
      />

      {/* Botón Siguiente */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        {">"}
      </button>
    </div>
  );
};
ImageCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageCarousel;
