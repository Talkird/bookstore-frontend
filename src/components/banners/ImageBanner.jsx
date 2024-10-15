
import Slider from "react-slick"; // Importar react-slick
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Componente para el banner de imágenes
function ImageBanner() {
  const settings = {
    dots: true, // Mostrar puntos de navegación
    infinite: true, // Permitir desplazamiento infinito
    speed: 500, // Velocidad de transición
    slidesToShow: 1, // Mostrar una imagen a la vez
    slidesToScroll: 1, // Desplazar una imagen a la vez
    autoplay: true, // Hacer que las imágenes cambien automáticamente
    autoplaySpeed: 3000, // Tiempo en milisegundos entre cambios de imagen
    arrows: true, // Mostrar flechas de navegación
  };

  const images = [
    "https://acdn.mitiendanube.com/stores/001/315/129/themes/cubo/2-slide-1716819413094-6733356213-b7a5d39530e4190623e5356f6d196b9f1716819414-1024-1024.webp?264042642",
    "https://market2.livriz.com/storage/section/1/escape%20de%20viena.png",
    "https://market2.livriz.com/storage/section/1/Blackwater.jpg",
    "https://planetadelibrosar0.cdnstatics.com/usuaris/web_banners/fotos/4/original/3329_1_PDL_1140x272.png"
  ];

  return (
    <div className="banner-container flex justify-center">
      <Slider {...settings} className="w-full max-w-3xl">
        {images.map((image, index) => (
          <div key={index} className="flex justify-center">
            <img
              src={image}
              alt={`Banner ${index}`}
              className="banner-image object-cover w-full h-60" // Cambia h-60 para ajustar la altura
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageBanner;
