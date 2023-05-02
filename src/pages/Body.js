import { BodyStyle } from "../style/Body.style";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const Body = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    const getProducts = async () => {
      try {
        const { data } = await axios.get(process.env.REACT_APP_API_URL);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  return (
    <BodyStyle>
      {products.map((item) => (
        <div
          key={item._id}
          onClick={() => {
            navigate(`/products/${item._id}`);
          }}>
          <img src={item.img} alt={item.title} />
          <h6>{item.title}</h6>
          <p>{item.price}</p>
        </div>
      ))}
    </BodyStyle>
  );
};
export default Body;
