import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import Catalog from "./pages/Catalog";
import Purchase from "./pages/Purchase";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ProductDetail from "./pages/ProductDetail";
import Faq from "./pages/Faq";

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
        <Route path="/catalog/product" element={<ProductDetail />} />
        <Route path="/faq" element={<Faq />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
