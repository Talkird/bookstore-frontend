import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";

function ImageBanner({ images }) {
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
      <Slider {...settings} className="w-full max-w-3xl">
        {images.map((image, index) => (
          <div key={index} className="flex justify-center">
            <img
              src={image}
              alt={`Banner ${index}`}
              className="banner-image h-60 w-full object-cover" // Cambia h-60 para ajustar la altura
            />
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
