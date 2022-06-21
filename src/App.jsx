import React, { useState, useEffect } from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { commerce } from "./lib/commerce";
import Footer from "./Componets/Footer/Footer";
import Navbar from "./Componets/Navbar/Navbar";
import Home from './pages'
import Artist from "./pages/Artist/Artist";
import LogIn from "./pages/Login/LogIn";
import Products from "./pages/Products/Produts";
import SignUp from "./pages/SignUp/SignUp";
import Cart from "./pages/Cart/Cart";
import CheckOut from "./pages/CheckOut/CheckOut";




function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

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

  const refreshCart =  async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart)
  }

   const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

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
        <Route path="/checkout" element={<CheckOut 
            cart={cart}
            order={order}
            onCaptureCheckout={handleCaptureCheckout}
            error={errorMessage}/>} />
        <Route path="/" exact element={<Home/>}/>

        </Routes>
      
    <Footer gutterbottom />
     </div>
    </Router>
  );
  }

export default App;
