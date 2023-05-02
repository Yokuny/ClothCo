import styled from "styled-components";

export const Panel = styled.section`
  display: flex;
  padding: 19px;
  color: #000;
  ol {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    padding: 10px 30px;

    list-style-type: disc;
    box-sizing: border-box;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    font-size: 1rem;
  }
  .type,
  .color,
  .details {
    font-size: 1.2rem;
  }
  .type::before {
    content: "Type: ";
    color: #121212bf;
    font-size: 1rem;
  }
  .color::before {
    content: "Color: ";
    color: #121212bf;
    font-size: 1rem;
  }
  .details::before {
    content: "Details: ";
    color: #121212bf;
    font-size: 1rem;
  }
  .image {
    width: 60%;
    img:first-child {
      width: 100%;
      border-radius: 4px;
      margin-bottom: 10px;
    }
    img:nth-child(2) {
      width: 50%;
      border-radius: 4px;
    }
  }

  .info {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    box-sizing: border-box;
    padding-left: 40px;
    h1 {
      font-family: "Instrument Serif", serif;
      font-size: 40px;
      font-weight: 800;
      margin-bottom: 20px;
    }
    p {
      font-size: 1.3rem;
      color: #121212bf;
    }
    p:nth-child(2) {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 18px;
      color: #000;
    }
    p:nth-child(2)::before {
      content: "$ ";
      font-size: 0.9rem;
      color: #121212bf;
    }

    button {
      width: 100%;
      height: 45px;
      margin-top: 7px;
      margin-bottom: 30px;

      border: none;
      border-radius: 5px;
      font-size: 1.2rem;
      color: #000;
      background-color: rgb(252, 228, 119);
      :hover {
        border: 1px solid #000;
        box-shadow: 0px 0px 1px 1.4px rgb(252, 228, 119);
      }
    }

    .cart {
      background-color: white;
      box-sizing: border-box;
      border: 1px solid black;
      margin-bottom: 7px;
      transition: all 0.2s ease-in-out;
      :hover {
        background-color: #000;
        color: white;
        border: 1px #000 solid;
        box-shadow: 0px 0px 0px 0px;
      }
    }
  }

  @media (max-width: 990px) {
    .image {
      width: 50%;
      img:nth-child(2) {
        width: 100%;
      }
    }
    .info {
      width: 50%;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    .image {
      width: 100%;
    }
    .info {
      width: 100%;
      padding-left: 0px;
      margin-top: 20px;
    }
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 7px;
  margin-bottom: 30px;
  div {
    width: 142px;
    height: 47px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    border: 1px solid #000;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 5px;
    margin-right: 15px;
  }
`;
