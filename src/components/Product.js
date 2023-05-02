import { HiPlusSm, HiMinusSm, HiTrash } from "react-icons/hi";
import { Item, Block, Button } from "../style/Cart-Product.style.js";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Product = ({ image, title, price, quantity, id, total, removing }) => {
  const [amount, setAmount] = useState(1);
  const [overAmount, setOverAmount] = useState(false);

  const localUpdate = (type) => {
    const products = JSON.parse(localStorage.getItem("cart"));
    products.map((item) => {
      if (item._id === id) {
        if (type === "increase") item.quantity++;
        if (type === "decrease") item.quantity--;
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(products));
  };

  const removeProduct = () => {
    const products = JSON.parse(localStorage.getItem("cart"));
    const newArray = products.filter((item) => {
      if (item._id === id) {
        return false;
      }
      return true;
    });
    localStorage.setItem("cart", JSON.stringify(newArray));
    removing((curr) => !curr);
  };

  const increase = () => {
    if (amount >= quantity) {
      setOverAmount(true);
      return;
    }
    total(price, "increase");
    localUpdate("increase");
    setAmount((curr) => curr + 1);
  };

  const decrease = () => {
    if (amount <= 0) return;
    if (amount <= quantity) {
      setOverAmount(false);
    }
    total(price, "decrease");
    localUpdate("decrease");
    setAmount((curr) => curr - 1);
  };

  useEffect(() => {
    const allProducts = JSON.parse(localStorage.getItem("cart"));
    const product = allProducts.find((product) => product._id === id);
    setAmount(product.quantity);
    if (product.quantity > quantity) {
      setOverAmount(true);
    } else {
      setOverAmount(false);
    }
  }, [quantity, id]);

  return (
    <Item>
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <Block>
        <div>
          <h3>{title}</h3>
          <p>${price.toFixed(2)}</p>
        </div>
        <Button overAmount={overAmount}>
          <p>max {quantity}</p>
          <div>
            <HiMinusSm onClick={decrease} />
            <p>{amount}</p>
            <HiPlusSm onClick={increase} />
          </div>
          <HiTrash onClick={removeProduct} />
        </Button>
      </Block>
      <h2>{(price * amount).toFixed(2)}</h2>
    </Item>
  );
};
export default Product;
