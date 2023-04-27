import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cart from "./pages/Cart"
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Layout from "./Layout";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<div>main</div>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/checkout" element={<></>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
