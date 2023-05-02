import { Panel, Button } from "../style/Products.style.js";
import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router";
import { HiPlusSm, HiMinusSm } from "react-icons/hi";
import { CartContext } from "../context/cartContext";
import axios from "axios";

export default function Products() {
  const { setCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [item, setItem] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(`${process.env.REACT_APP_API_URL}product/${id}`)
      .then(({ data }) => {
        setItem(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  function changeQuantity(i) {
    if (quantity > 1 || i === 1) setQuantity(quantity + i);
  }

  function addToCart(product, quantity) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = cart.find((item) => item._id === product._id);
    if (item) {
      item.quantity += Number(quantity);
    } else {
      cart.push({ _id: product._id, quantity: Number(quantity) });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    setCart(cart.reduce((total, item) => total + item.quantity, 0));
  }

  function buyNow(item, quantity) {
    addToCart(item, quantity);
    navigate("/cart");
  }

  return (
    <Panel>
      <div className="image">
        <img src={item.img} alt={item.title} />
        <img src={item.imgb} alt={item.title} />
      </div>
      <div className="info">
        <h1>{item.title}</h1>
        <p>{item.price?.toFixed(2)}</p>
        <p>Quantity</p>
        <Button>
          <div>
            <HiMinusSm onClick={() => changeQuantity(-1)} />
            <h6>{quantity}</h6>
            <HiPlusSm onClick={() => changeQuantity(1)} />
          </div>
        </Button>
        <button className="cart" onClick={() => addToCart(item, quantity)}>
          Add to cart
        </button>
        <button onClick={() => buyNow(item, quantity)}>Buy it now</button>

        <h2 className="type">{item.type}</h2>
        <h2 className="color">{item.color}</h2>
        <h2 className="details">
          <ol>
            {item.description?.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ol>
        </h2>
      </div>
    </Panel>
  );
}
