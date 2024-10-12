import Product from "../components/product/Product"
import image from '../assets/image.webp'
import Pagination from "../components/ui/Pagination"

function Catalog() {
  return (
    <div className="flex items-center p-4">
      <Product image={image} title="La Casa Neville" price={20000}/>
      <Pagination currentPage={1} totalPages={10} onPageChange={() => {}}/>
    </div>
    
  )
}

export default Catalog