import { Link } from "react-router-dom";
import styled  from "styled-components" 

export default function Cart() {
  return (
    <Container>
      <h1>Your Cart is empty</h1>
      <Link to="/">
        <button>Continue shopping</button>
      </Link>
    </Container>
  );
}
const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 40px;
    margin-top: 45px;
    margin-bottom: 30px;
  }
  button {
    font-size: 17px;
    background-color: rgb(252, 228, 119);
    border: none;
    border-radius: 5px;
    width: 208px;
    height: 45px;
    box-sizing: content-box;
    :hover {
      cursor: pointer;
      box-shadow: 0px 0px 1px 1px rgb(252, 228, 119);
    }
  }
`;