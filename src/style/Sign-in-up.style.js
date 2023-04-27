import styled from "styled-components";
const SignForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
  gap: 10px;

  height: auto;
  background-color: #f9f9f9;
  padding-top: 20px;
  padding-bottom: 20px;
  :before {
    content: "${(props) => props.title}";
    font-family: "Instrument Serif", serif;
    font-weight: 800;
    font-size: 52px;
    line-height: 50px;
    margin-bottom: 21px;
    margin-top: 21px;
    display: block;
    color: #000;
  }
  input,
  button,
  a {
    width: 100%;
    height: 110px;
    padding: 28px 1.5rem;
    box-sizing: border-box;

    font-size: 36px;
    letter-spacing: -1px;
    text-align: center;

    border: #000 solid 1px;
    border-radius: 113px;
    background-color: #fff;
  }
  input:active,
  input:focus {
    outline: none;
  }
  button {
    font-weight: 600;
    letter-spacing: 1px;
    background-color: #000;
    color: #fff;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: min(36px, 6vw);
    background-color: rgb(188, 254, 47);

    color: #000;
  }
  div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 20px;
  }
  div a {
    text-decoration: underline;
    height: auto;
    width: auto;
    border: none;
    background-color: transparent;
    color: #000;
    transition: color 0.1s ease-in-out;
  }
  div a:hover {
    color: #999;
  }
`;
export default SignForm;
