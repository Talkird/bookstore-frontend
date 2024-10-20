import { useParams } from 'react-router-dom';
import { books } from "../pages/Catalog";
import Product from "../components/product/Product";
import BackButton from "../components/ui/BackButton";

function CategoryPage() {
  const { category } = useParams(); // Obtener el nombre de la categoría de la URL

  // Filtrar los libros por categoría, asegurándote de que coincida con la categoría de la URL
  const filteredBooks = books.filter(book => book.category.toLowerCase() === decodeURIComponent(category));

  return (
    <div className="p-8">
      
      <div className="flex flex-col text-right">
        <div className="mb-4">
          <BackButton />
        </div>
        <h1 className="text-3xl font-semibold mb-5 text-left">Libros en la categoría: {category}</h1>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book, index) => (
            <Product
              key={index}
              image={book.image}
              title={book.title}
              author={book.author}
              price={book.price}
            />
          ))
        ) : (
          <p>No hay libros disponibles en esta categoría.</p>
        )}
      </div>
    </div>
  );
}

export default CategoryPage;
