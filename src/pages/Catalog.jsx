import Product from "../components/product/Product"
import image from '../assets/image.webp'

function Catalog() {
  return (
    <div className="flex items-center p-4">
      <Product image={image} title="La Casa Neville" price={20000}/>
    </div>
    
  )
}

export default Catalog