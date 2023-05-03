import styled from "styled-components";
export const BodyStyle = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
  row-gap: 70px;
  box-sizing: border-box;
  padding-bottom: 100px;
  div:hover {
    cursor: pointer;
    h6 {
      text-decoration: underline;
    }
  }
  @media (max-width: 1100px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  img {
    width: 100%;
    height: 100%;
    aspect-ratio: 4.2/4;
    object-fit: cover;
    object-position: center;
    border-radius: 16px;
  }
  h6 {
    font-size: 1rem;
    margin-left: 4px;
    letter-spacing: 0.5px;
    line-height: 30px;
  }
  p {
    margin-left: 4px;
    font-size: 1.1rem;
  }
  p:before {
    content: "$ ";
  }
  p:after {
    content: ".00";
    font-size: 1rem;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    h6 {
      font-size: 0.8rem;
      margin-top: 10px;
      line-height: normal;
    }
    p {
      margin-top: 6px;
      font-size: 0.9rem;
    }
  }
`;
