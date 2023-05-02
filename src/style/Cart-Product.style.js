import styled from "styled-components";
export const Item = styled.div`
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
  h2::before {
    content: "$";
  }
`;
export const Block = styled.div`
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
export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    padding: 1px;
    font-size: 18px;
    transform: all 1s ease-in-out;
  }
  svg:hover {
    font-size: 20px;
    padding: 0px;
  }
  p {
    color: ${({ overAmount }) => (overAmount ? "crimson" : "yellowgreen")};
  }
  p:first-child {
    color: #000;
    font-size: 1rem;
    font-style: italic;
    text-transform: lowercase;
    margin-right: 10px;
  }
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
