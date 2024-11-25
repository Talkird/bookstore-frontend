import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";
import SliderArrow from "./SliderArrow";
import Button from "../ui/Button";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getUserId, getToken } from "../../utils/token";
import { addCartItem } from "../../redux/slice/cartSlice";
import { formatPeso } from "../../utils/format";
import { useDispatch } from "react-redux";

function BookSlider({ title, books }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      <div className="mt-9 w-3 h-3 bg-blue-300 rounded-full hover:bg-blue-700"></div>
    ),
    
  };

  const handleClick = (bookTitle) => {
    navigate(`/catalog/product/${encodeURIComponent(bookTitle)}`);
  };

  const handleAddToCart = (bookId) => {
    console.log("User tried adding to cart.");
    const token = getToken();
    const userId = getUserId();

    if (!token || !userId) {
      console.error("User is not authenticated.");
      return;
    }

    dispatch(
      addCartItem({
        userId: userId,
        cartItemRequest: {
          bookId: bookId,
          quantity: 1,
        },
      }),
    );
  };

  return (
    <div className="mt-6 overflow-hidden rounded border-2 border-secondary p-8 pt-3">
      <h2 className="mb-2 text-center text-2xl font-medium">{title}</h2>
      <Slider {...settings}>
        {books.map((book, index) => (
          <div key={index} className="p-4 text-center">
            {/* Al hacer clic en la imagen o título, redirige a la página de detalles del libro */}
            <img
              onClick={() => handleClick(book.title)}
              src={book.image}
              alt={book.title}
              className="mx-auto h-48 w-32 object-cover transition hover:cursor-pointer hover:opacity-90"
            />
            <h3
              onClick={() => handleClick(book.title)}
              className="mt-4 text-lg font-bold text-blueLight hover:cursor-pointer hover:opacity-60"
            >
              {book.title}
            </h3>
            <p className="text-sm text-gray-500">{book.author}</p>
            <p className="text-sm font-bold text-primary mb-2">
              {formatPeso(book.price)}
            </p>

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