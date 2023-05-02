import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;

  h1 {
    margin-top: 45px;
    margin-bottom: 15px;
    font-family: "Instrument Serif", serif;
    font-weight: 800;
    font-size: 40px;
    text-align: center;
  }
  p {
    margin-bottom: 40px;
    text-align: center;
  }
  button {
    color: #000;
    font-size: 17px;
    background-color: rgb(188, 254, 47);
    border: none;
    border-radius: 5px;
    width: 208px;
    height: 45px;
    box-sizing: content-box;
    border: 1px solid transparent;
    transform: all 0.2s ease-in-out;
    :hover {
      border: 1px solid #000;
      box-shadow: 0px 0px 1px 1px rgb(188, 254, 47);
    }
  }
`;
