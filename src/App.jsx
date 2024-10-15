import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import Catalog from "./pages/Catalog";
import Purchase from "./pages/Purchase";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
<<<<<<< HEAD
import CategoryPage from './pages/CategoryPage'; 
import ComoComprar from "./pages/ComoComprar";
import QuienesSomos from "./pages/QuienesSomos";
=======
import ProductDetail from "./pages/ProductDetail";
import Faq from "./pages/Faq";
>>>>>>> 057186933d1bbd7d8b9ec5c6f20e5abb7bbc0dc0

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/purchase" element={<Purchase />} />
<<<<<<< HEAD
        <Route path="/books/:category" element={<CategoryPage />} /> 
        <Route path="/como-comprar" element={<ComoComprar />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
=======
        <Route path="/catalog/product" element={<ProductDetail />} />
        <Route path="/faq" element={<Faq />} />
>>>>>>> 057186933d1bbd7d8b9ec5c6f20e5abb7bbc0dc0
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
