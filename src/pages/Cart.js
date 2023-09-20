import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Section, Title, Products, Total } from "../style/Cart.style";
import EmptyCart from "../components/EmptyCart";
import Product from "../components/Product";
import { reqString } from "../utils/reqString.js";
import { config } from "../utils/bearerToken.js";

const Cart = () => {
  const [removing, setRemoving] = useState(false);
  const [items, setItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    const itens = JSON.parse(localStorage.getItem("cart")) || [];
    setItems(itens);
  }, [removing]);

  useEffect(() => {
    const getProducts = async () => {
      if (items.length > 0) {
        try {
          const promises = items.map((item) => axios.get(`${reqString}product/${item._id}`));
          const responses = await Promise.all(promises);
          const products = responses.map((response) => response.data);
          setProducts(products);
        } catch (err) {
          console.log(err);
          setProducts([]);
        }
      }
    };
    getProducts();
  }, [items]);

  useEffect(() => {
    const totalAmount = items.reduce((total, item) => {
      const product = products.find((p) => p._id === item._id);
      return product ? total + product.price * item.quantity : total;
    }, 0);
    setTotal(totalAmount);
  }, [items, products]);

  const setTotalPrice = (value, type) => {
    if (type === "increase") setTotal((curr) => curr + value);
    if (type === "decrease") setTotal((curr) => curr - value);
  };

  const finishPayment = async () => {
    const token = localStorage.getItem("token");
    if (!token) return navigate("/signIn");

    const products = JSON.parse(localStorage.getItem("cart"));
    const body = { products: products.map((item) => ({ id: item._id, quantity: item.quantity })) };

    try {
      const res = await axios.post(`${reqString}checkout`, body, config);
      alert("Payment successful!");
      navigate(`/checkout/${res.data?.orderId}`);
    } catch (err) {
      console.log(err);
    }
  };

  if (products.length === 0) return <EmptyCart />;

  return (
    <Section>
      <Title>
        <h1>Your Cart</h1>
        <Link to="/">Continue shopping</Link>
      </Title>
      <Title>
        <p>Product</p>
        <p>quantity</p>
        <p>total</p>
      </Title>

      <Products>
        {products.map((item) => (
          <Product
            key={item._id}
            image={item.img}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
            id={item._id}
            total={setTotalPrice}
            removing={setRemoving}
          />
        ))}
      </Products>

      <Total>
        <h2>
          Subtotal<span>{total.toFixed(2)}</span>
        </h2>
        <button onClick={finishPayment}>Checkout</button>
      </Total>
    </Section>
  );
};
export default Cart;
