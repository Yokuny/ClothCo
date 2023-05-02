import SignForm from "../style/Sign-in-up.style.js";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const navigate = useNavigate();
  window.scrollTo(0, 0);

  const formSubmit = async (event) => {
    event.preventDefault();
    if (name.length > 5 && email.length > 5 && password.length > 5 && repeatPassword === password) {
      const body = { name, email, password };
      try {
        await axios.post(`${process.env.REACT_APP_API_URL}register`, body);
        navigate("/signIn");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const inputName = ({ target }) => {
    if (target.value.length > 5) {
      setName(target.value);
      target.style.border = "1px solid rgb(188, 254, 47)";
    } else {
      target.style.border = "1px solid purple";
    }
  };
  const inputEmail = ({ target }) => {
    const emailRegex = RegExp(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i);
    if (emailRegex.test(target.value)) {
      setEmail(target.value);
      target.style.border = "1px solid rgb(188, 254, 47)";
    } else {
      target.style.border = "1px solid purple";
    }
  };
  const inputPassword = ({ target }) => {
    if (target.value.length > 5) {
      setPassowrd(target.value);
      target.style.border = "1px solid rgb(188, 254, 47)";
    } else {
      target.style.border = "1px solid purple";
    }
  };
  const inputRepeatPassword = ({ target }) => {
    if (target.value === password) {
      setRepeatPassword(target.value);
      target.style.border = "1px solid rgb(188, 254, 47)";
    } else {
      target.style.border = "1px solid purple";
    }
  };

  return (
    <SignForm title="Sign up" onSubmit={formSubmit}>
      <input type="text" onChange={inputName} placeholder="Name" />
      <input type="email" onChange={inputEmail} placeholder="Email" />
      <input type="password" onChange={inputPassword} placeholder="Password" />
      <input type="password" onChange={inputRepeatPassword} placeholder="Repeat password" />
      <button type="submit">Register</button>
      <div>
        <Link to="/signIn">Log in</Link>
        <Link to="/">keep as a guest</Link>
      </div>
    </SignForm>
  );
};
export default SignUp;
