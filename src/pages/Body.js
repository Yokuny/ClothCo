import styled from "styled-components";
const BodyStyle = styled.div`
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
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
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
    margin-left: 4px;
    font-size: 0.8rem;
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
`;
const products = [
  {
    id: 52,
    title: "Cap Ebbets Corduroy",
    price: 120.0,
    quantity: 1,
    image:
      "https://cdn.shopify.com/s/files/1/0612/2477/9832/products/Creative-Label-Tee_White-Front-Detail_1080x_9854c7e7-1806-43eb-b7fb-33289ccc0a45.webp?v=1676406143&width=360",
  },
  {
    id: 62,
    title: "Cap Ebbets Corduroy",
    price: 90.0,
    quantity: 1,
    image:
      "https://cdn.shopify.com/s/files/1/0612/2477/9832/products/DSC07708_Coffee-Jazz-Rap_Black_Shopify_1080x_3e75d225-5a4e-49e6-9f70-79bacedcce60.webp?v=1676406430&width=360",
  },
  {
    id: 12,
    title: "Cap Ebbets Corduroy",
    price: 48.0,
    quantity: 1,
    image:
      "https://cdn.shopify.com/s/files/1/0612/2477/9832/products/Varsity-C_Cap-Corduroy-Yellow_Front_1080x_6fe179e1-b3f3-452b-a2d4-ee0c1d70e7c9.webp?v=1676406573&width=300",
  },
  {
    id: 32,
    title: "Cap Ebbets Corduroy",
    price: 70.0,
    quantity: 1,
    image:
      "https://cdn.shopify.com/s/files/1/0612/2477/9832/products/Varsity-C_Cap-Corduroy-Black_Back_1080x_a4f0ef18-8baf-4de8-82df-6836c29af452.webp?v=1676407572&width=360",
  },
  {
    id: 1,
    title: "Cap Ebbets Corduroy",
    price: 48.0,
    quantity: 1,
    image:
      "https://cdn.shopify.com/s/files/1/0612/2477/9832/products/Varsity-C_Cap-Corduroy-Yellow_Front_1080x_6fe179e1-b3f3-452b-a2d4-ee0c1d70e7c9.webp?v=1676406573&width=300",
  },
  {
    id: 2,
    title: "Cap Ebbets Corduroy",
    price: 70.0,
    quantity: 1,
    image:
      "https://cdn.shopify.com/s/files/1/0612/2477/9832/products/Varsity-C_Cap-Corduroy-Pink_Back_1080x_23513aa7-ea3e-42c1-a62e-5d68f424e551.webp?v=1676406569&width=360",
  },
  {
    id: 3,
    title: "Cap Ebbets Corduroy",
    price: 70.0,
    quantity: 1,
    image:
      "https://cdn.shopify.com/s/files/1/0612/2477/9832/products/Varsity-C_Cap-Corduroy-Black_Back_1080x_a4f0ef18-8baf-4de8-82df-6836c29af452.webp?v=1676407572&width=360",
  },
  {
    id: 7,
    title: "Cap Ebbets Corduroy",
    price: 90.0,
    quantity: 1,
    image:
      "https://cdn.shopify.com/s/files/1/0612/2477/9832/products/Ebbets-C_Cap_Camel_Back_1080x_50142e26-b3dc-4003-8bc7-5f5a2cf98fdd.webp?v=1676406501&width=360",
  },
  {
    id: 4,
    title: "Cap Ebbets Corduroy",
    price: 70.0,
    quantity: 1,
    image:
      "https://cdn.shopify.com/s/files/1/0612/2477/9832/products/Required-Reading-Tee_Black_Back_1080x_ff52084e-6ba2-4f20-9d0a-457468af7c21.webp?v=1676407122&width=360",
  },
  {
    id: 5,
    title: "Cap Ebbets Corduroy",
    price: 120.0,
    quantity: 1,
    image:
      "https://cdn.shopify.com/s/files/1/0612/2477/9832/products/Creative-Label-Tee_White-Front-Detail_1080x_9854c7e7-1806-43eb-b7fb-33289ccc0a45.webp?v=1676406143&width=360",
  },
  {
    id: 6,
    title: "Cap Ebbets Corduroy",
    price: 90.0,
    quantity: 1,
    image:
      "https://cdn.shopify.com/s/files/1/0612/2477/9832/products/DSC07708_Coffee-Jazz-Rap_Black_Shopify_1080x_3e75d225-5a4e-49e6-9f70-79bacedcce60.webp?v=1676406430&width=360",
  },
  {
    id: 8,
    title: "Cap Ebbets Corduroy",
    price: 90.0,
    quantity: 1,
    image:
      "https://cdn.shopify.com/s/files/1/0612/2477/9832/products/Never-Not-Working-Tee_Black_Front-Detail_1080x_7fac05b4-1a0d-456e-80d3-967df217c8f3.webp?v=1676488037&width=360",
  },
];
const Body = () => {
  return (
    <BodyStyle>
      {products.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.title} />
          <h6>{item.title}</h6>
          <p>{item.price}</p>
        </div>
      ))}
    </BodyStyle>
  );
};
export default Body;
