import { useEffect } from "react";
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';

import Checkout from './components/Checkout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaWhatsapp } from 'react-icons/fa6';
import ProductDetail from "./pages/ProductDetail";
import AddProduct from "./components/AddProduct";
import AdminRoute from "./components/AdminRoute";
import Login from "./pages/login";
import CartDrawer from "./components/CartDrawer";
import AdminOrders from "./pages/AdminOrders";

function App({user}) {
    
  return (
    <div className=" bg-neutral-light flex flex-col  justify-center z-1">
      <Navbar />
      <CartDrawer />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
     <Route path="/login" element={<Login />} />
      <Route path="/add-product" element={
          <AdminRoute>
            <AddProduct />
          </AdminRoute>
        } /> {/* ⬅️ new route */}
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      

<Route path="/orders" element={
  <AdminRoute>
     <AdminOrders user={user}/>
  </AdminRoute>
  } />
    </Routes>
    <Footer />
  <a
  href="https://wa.me/2347086076911"
  className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg z-50"
  target="_blank"
  rel="noopener noreferrer"
  title="Chat with us on WhatsApp"
      >
  <FaWhatsapp size={20}/>
</a>  


<ToastContainer 
        position="top-right"
        autoClose={3000} 
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
/>
      </div>
  );
}

export default App;
