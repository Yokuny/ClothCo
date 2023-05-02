import styled from "styled-components";

export const Section = styled.section`
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
export const Title = styled.div`
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
  p:nth-child(2) {
    margin-left: min(23vw, 200px);
  }
`;

export const Products = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: space-between;
  border-top: 1px solid rgba(18, 18, 18, 0.1);
  border-bottom: 1px solid rgba(18, 18, 18, 0.1);
  padding: 40px 0px;
`;
export const Total = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 40px;
  padding-bottom: 50px;

  h2 {
    font-size: 20px;
    margin-top: 45px;
    margin-bottom: 30px;
  }
  span {
    font-size: 22px;
    color: rgba(18, 18, 18, 0.75);
    margin-left: 15px;
  }
  span::before {
    content: "$ ";
  }
  button {
    color: #000;
    font-size: 17px;
    background-color: rgb(188, 254, 47);
    border: none;
    border-radius: 5px;
    width: 348px;
    height: 45px;
    box-sizing: content-box;
    border: 1px solid transparent;
    transform: all 0.2s ease-in-out;
    :hover {
      border: 1px solid #000;
      box-shadow: 0px 0px 1px 1px rgb(188, 254, 47);
    }
  }

  @media (max-width: 768px) {
    align-items: center;
  }
`;
