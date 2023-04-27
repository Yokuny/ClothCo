import { Link } from "react-router-dom";
import styled  from "styled-components" ;
import EmptyCart from "../components/EmptyCart";
import Product from "../components/Product";

export default function Cart() {
  const selectedItems = [exemploItem, exemploItem];
  if (selectedItems.length === 0) return <EmptyCart />;
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
        {selectedItems.map((item) => (
          <Product
            key={item.id}
            price={item.price}
            image={item.image}
            title={item.title}
            quantity={item.quantity}
          />
        ))}
      </Products>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 19px;
  p {
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 0.5px;
    line-height: 25px;
  }
`;
const Title = styled.div`
  font-size: 52px;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 21px;
  margin-bottom: 10px;
  h1 {
    font-family: "Instrument Serif", serif;
    font-weight: 800;
  }
  a {
    text-decoration: underline;
    font-size: 18px;
    :hover {
      text-decoration-thickness: 2px;
    }
  }
  p {
    font-size: 12px;
    color: rgba(18, 18, 18, 0.75);
  }
`;

const Products = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: space-between;
  border-top: 1px solid rgba(18, 18, 18, 0.1);
  border-bottom: 1px solid rgba(18, 18, 18, 0.1);
  padding: 40px 0px;
`;

const exemploItem = {id:1, title: "Cap Ebbets Corduroy", price: 48.00, quantity: 1 ,image: "https://cdn.shopify.com/s/files/1/0612/2477/9832/products/Varsity-C_Cap-Corduroy-Yellow_Front_1080x_6fe179e1-b3f3-452b-a2d4-ee0c1d70e7c9.webp?v=1676406573&width=300"}

