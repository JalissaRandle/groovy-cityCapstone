import React, { useState, useEffect } from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { commerce } from "./lib/commerce";
import Footer from "./Componets/Footer/Footer";
import Navbar from "./Componets/Navbar/Navbar";
import Home from './pages'
import Artist from "./pages/Artist";
import LogIn from "./pages/Login/LogIn";
import Products from "./pages/Produts";
import SignUp from "./pages/SignUp";
import Cart from "./pages/Cart";




function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products)
  return (
    <Router className="router">
     <Navbar />
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/products" element={<Products/>} />
          <Route path="/artist" element={<Artist/>} />
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/login" element={<LogIn/>} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
    <Footer />
    </Router>
     
  );
}

export default App;
