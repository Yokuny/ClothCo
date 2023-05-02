import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const CheckoutContent = ({ order, token }) => {
  const [invoice, setInvoice] = useState([]);

  useEffect(() => {
    const config = { headers: { Authorization: `Bearer ${token}` } };

    const getProducts = async () => {
      const reqString = process.env.REACT_APP_API_URL;
      try {
        const orderContent = await axios.get(`${reqString}checkout/${order}`, config);
        setInvoice(orderContent.data);
        localStorage.removeItem("cart");
      } catch (err) {
        console.log(err);
        setInvoice([]);
      }
    };
    getProducts();
  }, [order, token]);

  return (
    <Table>
      <thead>
        <tr>
          <th>item</th>
          <th>amount</th>
          <th>unity price</th>
          <th>total</th>
        </tr>
      </thead>
      <tbody>
        {invoice.products &&
          invoice.products.map((order, index) => (
            <tr key={order.title}>
              <td>{order.title}</td>
              <td>{order.quantity}</td>
              <td>$ {order.price}</td>
              <td>$ {order.quantity * order.price}</td>
            </tr>
          ))}
        <tr>
          <td colSpan="3"></td>
          <td colSpan="1">$ {invoice.total}</td>
        </tr>
        <tr>
          <td colSpan="4">id: {invoice._id}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default CheckoutContent;

const Table = styled.table`
  width: 100%;
  margin: 8vh 0px;
  thead,
  tbody,
  tr,
  th,
  td {
    padding: 0.6rem;
    text-align: center;
    border: 1px solid gray;
  }
  thead,
  tr {
    border-left: 3px solid rgb(188, 254, 47);
  }
  thead,
  th {
    font-family: "Instrument Serif", serif;
    font-style: italic;
    font-size: 1.4rem;
  }
  tbody {
    font-size: 1rem;
  }
`;
