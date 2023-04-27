import styled from "styled-components"
import { BsTrash3 } from "react-icons/bs";
import {HiPlusSm, HiMinusSm } from "react-icons/hi";

export default function Product({ image, title, price, quantity }) {
  return (
    <Item>
      <img src={image} alt={title} />
      <Block>
        <div>
          <h3>{title}</h3>
          <p>${price.toFixed(2)}</p>
        </div>
        <Button>
          <div>
            <HiMinusSm />
            <p>{quantity}</p>
            <HiPlusSm />
          </div>
          <BsTrash3 />
        </Button>
      </Block>
      <h2>${(price * quantity).toFixed(2)}</h2>
    </Item>
  );
}

const Item = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  img {
    width: 110px;
    height: 137.5px;
    border-radius: 4px;
  }
  p {
    font-size: 16px;
  }
  h2 {
    width: 20%;
    text-align: right;
    font-size: 16px;
    margin-top: 10px;
  }
`;
const Block = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  h3 {
    font-size: 16px;
  }
  p {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    width: 40%;
    
    div {
      margin-bottom: 20px;
    }
  }
`;
const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: 142px;
    height: 47px;
    border: 1px solid black;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 5px;
    margin-right: 15px;
  }
`;