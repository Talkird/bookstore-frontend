import { useState } from 'react';
import Product from "../components/product/Product";
import image from '../assets/image.webp';
import Pagination from "../components/ui/Pagination"; 

const books = [
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
    { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },
  { image, title: "La Casa Neville", price: 20000 },

];

function Catalog() {
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 20;
  const totalPages = Math.ceil(books.length / booksPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * booksPerPage;
  const selectedBooks = books.slice(startIndex, startIndex + booksPerPage);

  return (
    <div className="flex flex-col items-center p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {selectedBooks.map((book, index) => (
          <Product key={index} image={book.image} title={book.title} price={book.price} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Catalog;