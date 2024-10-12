import React, { useState, useEffect, useRef } from 'react';
import Button from '../ui/Button';

const testimonials = [
  {
    name: 'Marta Martinez',
    text: 'Excelente Servicio! Recomiendo 100%.',
  },
  {
    name: 'Gonzalo Perez',
    text: 'Gran variedad de libros y excelente atención al cliente.',
  },
  {
    name: 'Pedro Rodriguez',
    text: 'Me encanta la selección de libros que tienen.',
  },
  {
    name: 'Laura Gomez',
    text: 'Excelente servicio y delivery. Volveré a comprar seguro.',
  },
  {
    name: 'Carlos Fernandez',
    text: 'Muy buenos precios, me encanta el diseño tienda.',
  },
];

function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(false);
  const intervalRef = useRef(null);

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(nextTestimonial, 8000);
  };

  const nextTestimonial = () => {
    setFade(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
      setTimeout(() => setFade(false), 300);
    }, 300);
    resetInterval();
  };

  const prevTestimonial = () => {
    setFade(true);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setFade(false), 300);
    }, 300);
    resetInterval();
  };

  useEffect(() => {
    intervalRef.current = setInterval(nextTestimonial, 8000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="w-full mt-8">
      <h2 className="text-3xl font-bold text-center mb-6">Testimonios de clientes</h2>
      <div className="relative w-full max-w-3xl mx-auto flex items-center">
        <Button
          onClick={prevTestimonial}
          className="bg-gray-500 bg-opacity-75 text-white p-2 rounded-full hover:bg-opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 mr-8"
          variant="outline"
          size="sm"
        >
          &lt;
        </Button>
        <div
          className={`p-8 border rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 ${
            fade ? 'opacity-0' : 'opacity-100'
          } transition-opacity duration-500 bg-white flex-grow`}
        >
          <p className="text-xl italic mb-4 text-gray-800">"{testimonials[current].text}"</p>
          <p className="text-right font-semibold text-gray-900">- {testimonials[current].name}</p>
        </div>
        <Button
          onClick={nextTestimonial}
          className="bg-gray-500 bg-opacity-75 text-white p-2 rounded-full hover:bg-opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 ml-8"
          variant="outline"
          size="sm"
        >
          &gt;
        </Button>
      </div>
    </div>
  );
}

export default Testimonials;