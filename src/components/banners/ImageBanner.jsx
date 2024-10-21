import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"; 

const images = [
  {src:"https://media.discordapp.net/attachments/1182409225155137566/1295842748502638644/file-N711TPtzhJYYOtZuZRb7H8CJ.png?ex=6715651a&is=6714139a&hm=25fe7a62cba611b50d26452ae35ddcfbc1b4c4f988f85761b0dc54200da4964a&=&format=webp&quality=lossless&width=1057&height=604",
    link:"/catalog"},
  {src:"https://market2.livriz.com/storage/section/1/REVERTE%20A_LA%20ISLA%20DE%20LA%20MUJER%20DORMIDA_BANNER-CUSPIDE-1050X580.jpg",
    link:"/catalog/product/La%20Isla%20de%20la%20Mujer%20Dormida"},
  {src:"https://market2.livriz.com/storage/section/1/escape%20de%20viena.png",
    link:"/catalog/product/Escape%20de%20Viena"},
  {src:"https://market2.livriz.com/storage/section/1/Blackwater.jpg",
    link:"/catalog?search=blackwater"},
  
];

function ImageBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="banner-container flex justify-center">
      <Slider {...settings} className="w-full max-w-full"> {/* Asegúrate de usar max-w-full para ancho completo */}
        {images.map((image, index) => (
          <div key={index} className="relative"> {/* relative para posicionar elementos sobre la imagen */}
            <Link to={image.link}> {/* Usa Link para hacer clic en la imagen */}
              <img
                src={image.src} // Accede al src de la imagen
                alt={`Banner ${index}`}
                className="banner-image h-96 w-full object-cover" // h-96 para altura mayor
              />
              {/* Textos superpuestos */}
              <div className="absolute top-10 left-10 text-white">
                <h2 className="text-4xl font-bold">{image.title}</h2>
                <p className="text-lg mt-2">{image.subtitle}</p>
                {image.buttonText && (
                  <button className="mt-4 px-4 py-2 bg-yellow-500 text-black font-bold rounded">
                    {image.buttonText}
                  </button>
                )}
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}

ImageBanner.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageBanner;
