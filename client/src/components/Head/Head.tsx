import React from "react";
import { Helmet } from "react-helmet-async";

type Props = {
  title: string;
  description?: string;
};

const Head: React.FC<Props> = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta
        name="Keywords"
        content="Flipkart Clone, React projects, E-commerce clone"
      />
      <meta
        name="Description"
        content={
          description
            ? description
            : "India's biggest online store for Mobiles, Fashion (Clothes/Shoes), Electronics, Home Appliances, Books, Home, Furniture, Grocery, Jewelry, Sporting goods, Beauty &amp; Personal Care and more! Find the largest selection from all brands at the lowest prices in India. Payment options - COD, EMI, Credit card, Debit card &amp;amp; more."
        }></meta>
      <link
        rel="canonical"
        href="https://flipkart-clone-taupe.vercel.app/"></link>
    </Helmet>
  );
};

export default Head;
