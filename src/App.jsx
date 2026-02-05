import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Checkout from './pages/Checkout';
import Orders from './pages/Orders';
import { CartProvider } from './context/CartContext';
import CartDrawer from './components/CartDrawer';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <CartProvider>
          <div className="min-h-screen bg-white">
            <Navbar />
            <CartDrawer />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>
            <Footer />
          </div>
        </CartProvider>
      </Router>
    </HelmetProvider>
  );
}

export default App;

