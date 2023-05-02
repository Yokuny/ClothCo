import SignForm from "../style/Sign-in-up.style.js";
import LogOut from "../components/LogOut";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acess, setAcess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (localStorage.getItem("token")) setAcess(true);
  }, []);

  const formSubmit = async (event) => {
    event.preventDefault();
    if (email.length > 5 && password.length > 5) {
      try {
        const body = { email, password };
        const token = await axios.post(`${process.env.REACT_APP_API_URL}login`, body);
        localStorage.setItem("token", token.data);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Formulário inválido");
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
      setPassword(target.value);
      target.style.border = "1px solid rgb(188, 254, 47)";
    } else {
      target.style.border = "1px solid purple";
    }
  };
  return (
    <>
      {acess ? (
        <LogOut />
      ) : (
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
      )}
    </>
  );
};
export default SignIn;
