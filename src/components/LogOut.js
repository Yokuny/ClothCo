import SignForm from "../style/Sign-in-up.style.js";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    navigate("/signIn");
  };
  return (
    <>
      <SignForm title="Log out" onSubmit={logOut}>
        <button type="submit">Log out</button>
      </SignForm>
    </>
  );
};
export default LogOut;
