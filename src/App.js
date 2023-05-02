import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { CartContext } from "./context/cartContext";
import Body from "./pages/Body.js";
import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Layout from "./Layout";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";

function App() {
  const [cart, setCart] = useState(0);
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cart.reduce((total, item) => item.quantity + total, 0));
  }, []);

  return (
    <BrowserRouter>
      <CartContext.Provider value={{ cart, setCart }}>
        <Layout value={cart}>
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/products/:id" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/checkout/:id" element={<Checkout />} />
          </Routes>
        </Layout>
      </CartContext.Provider>
    </BrowserRouter>
  );
}

export default App;
