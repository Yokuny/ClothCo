import { Link } from "react-router-dom";
import { useState } from "react";
import SignForm from "../style/Sign-in-up.style.js";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
  const formSubmit = (event) => {
    event.preventDefault();
    if (email.length > 5 && password.length > 5) {
      console.log("Formulário enviado");
    } else {
      console.log("Formulário inválido");
    }
  };
  const inputEmail = ({ target }) => {
    const emailRegex = RegExp(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i);
    if (emailRegex.test(target.value)) {
      setEmail(target.value);
      target.style.border = "1px solid cyan";
    } else {
      target.style.border = "1px solid purple";
    }
  };
  const inputPassword = ({ target }) => {
    if (target.value.length > 5) {
      setPassowrd(target.value);
      target.style.border = "1px solid cyan";
    } else {
      target.style.border = "1px solid purple";
    }
  };
  return (
    <SignForm title="Sign in" onSubmit={formSubmit}>
      <input type="email" onChange={inputEmail} placeholder="Email" />
      <input type="password" onChange={inputPassword} placeholder="Password" />
      <button type="submit">Log In</button>
      <Link to="/signUp">Authorize with Google</Link>
      <div>
        <Link to="/signUp">Register</Link>
        <Link to="/signUp">Forgot password?</Link>
      </div>
    </SignForm>
  );
};
export default SignIn;
