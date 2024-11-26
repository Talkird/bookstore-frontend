import { useState, useEffect, useRef } from "react";
import Button from "../ui/Button";

const testimonials = [
  {
    name: "Marta Martinez",
    text: "Excelente Servicio! Recomiendo 100%.",
  },
  {
    name: "Gonzalo Perez",
    text: "Gran variedad de libros y excelente atención al cliente.",
  },
  {
    name: "Pedro Rodriguez",
    text: "Me encanta la selección de libros que tienen.",
  },
  {
    name: "Laura Gomez",
    text: "Excelente servicio y delivery. Volveré a comprar seguro.",
  },
  {
    name: "Carlos Fernandez",
    text: "Muy buenos precios, me encanta el diseño tienda.",
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
      setCurrent(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length,
      );
      setTimeout(() => setFade(false), 300);
    }, 300);
    resetInterval();
  };

  useEffect(() => {
    intervalRef.current = setInterval(nextTestimonial, 8000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="mt-12 w-full">
      <h2 className="mb-6 text-center text-4xl font-extrabold text-gray-800">
        Testimonios de clientes
      </h2>
      <div className="relative mx-auto flex w-full max-w-3xl items-center">
        <Button
          onClick={prevTestimonial}
          className="mr-8 rounded-full bg-gray-500 p-2"
          variant="outline"
          size="sm"
        >
          &lt;
        </Button>
        <div
          className={`transform rounded-lg border p-8 shadow-lg transition-transform duration-300 hover:scale-105 ${
            fade ? "opacity-0" : "opacity-100"
          } flex-grow bg-white transition-opacity duration-500`}
        >
          <p className="mb-4 text-xl italic text-gray-800">
            {testimonials[current].text}
          </p>
          <p className="text-right font-semibold text-gray-900">
            {testimonials[current].name}
          </p>
        </div>
        <Button
          onClick={nextTestimonial}
          className="ml-8 rounded-full bg-gray-500 p-2"
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
