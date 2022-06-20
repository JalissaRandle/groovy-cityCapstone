import React, { useState, useEffect } from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { commerce } from "./lib/commerce";
// import { CssBaseline } from "@material-ui/core";
import Footer from "./Componets/Footer/Footer";
import Navbar from "./Componets/Navbar/Navbar";
import Home from './pages'
import Artist from "./pages/Artist";
import LogIn from "./pages/Login/LogIn";
import Products from "./pages/Products/Produts";
import SignUp from "./pages/SignUp";
import Cart from "./pages/Cart/Cart";
import CheckOut from "./pages/CheckOut/CheckOut";




function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});


  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };
  
  const fetchCart = async () => {
     setCart(await commerce.cart.retrieve())
  }

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);

    setCart(cart);
  }

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });

    setCart(cart);
  }

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId)

    setCart(cart);
  }

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

console.log(cart)

  return (
    <Router className="router">
      <div>
        <Navbar totalItems={cart.total_items}/>
        <Routes>
        <Route path='/products' element={<Products products = {products} onAddToCart = {handleAddToCart}/>} />
        <Route path='/artist' element={<Artist/>}/>
        <Route path='/cart' element={<Cart cart={cart} 
          handleUpdateCartQty={handleUpdateCartQty} 
          handleEmptyCart={handleEmptyCart}
          handleRemoveFromCart={handleRemoveFromCart} />} />
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/checkout" element={<CheckOut/>} />
        <Route path="/" exact element={<Home/>}/>
  
{/*        
          <Route path="/" exact element={<Home/>}/>
          <Route path="/products" element={<Products/>} />
          <Route path="/artist" element={<Artist/>} />
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/login" element={<LogIn/>} />
          <Route path="/cart" element={<Cart />} /> */}
        </Routes>
      
    <Footer />
     </div>
    </Router>
  );
  }

export default App;
