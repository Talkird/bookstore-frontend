import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";
import SliderArrow from "./SliderArrow";

function BookSlider({ title, books }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SliderArrow arrowDirection="right" />,
    prevArrow: <SliderArrow arrowDirection="left" />,
    adaptiveHeight: true,
    customPaging: (i) => (
      <div className="w-3 h-3 bg-blue-300 rounded-full hover:bg-blue-700"></div>
    ),
  };

  return (
    <div className="mt-6 overflow-hidden rounded border-2 border-secondary p-8 pt-3">
      <h2 className="mb-2 text-center text-2xl font-medium">{title}</h2>
      <Slider {...settings}>
        {books.map((book, index) => (
          <div key={index} className="p-4 text-center">
            <img
              src={book.image}
              alt={book.title}
              className="mx-auto h-48 w-32 object-cover"
            />
            <h3 className="mt-4 text-lg font-bold text-blueLight">
              {book.title}
            </h3>
            <p className="text-sm text-gray-500">{book.author}</p>
            <p className="text-sm font-bold text-primary mb-6">{book.price}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

BookSlider.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default BookSlider;
