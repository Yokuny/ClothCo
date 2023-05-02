import CheckoutContent from "../components/CheckoutContent";
import { Section } from "../style/Checkout.style";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Checkout() {
  const { id } = useParams();
  const token = localStorage.getItem("token");

  if (!id || !token) return <Failure />;
  return <Sucess order={id} token={token} />;
}

function Sucess({ order, token }) {
  window.scrollTo(0, 0);
  return (
    <Section>
      <h1>Congratulations! Your purchase is complete. </h1>
      <p>An email confirmation will be sent to you shortly.</p>
      <CheckoutContent order={order} token={token} />
      <Link to="/">
        <button>Continue shopping</button>
      </Link>
    </Section>
  );
}

function Failure() {
  window.scrollTo(0, 0);
  return (
    <Section>
      <h1>Your order could not be completed at this time. </h1>
      <p>Please try again later.</p>
      <Link to="/">
        <button>Continue shopping</button>
      </Link>
    </Section>
  );
}
