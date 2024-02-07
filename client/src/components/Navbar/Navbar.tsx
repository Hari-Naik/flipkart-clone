import React from "react";
import NavItem from "./NavItem";

const navItmes = [
  {
    id: 1,
    text: "Shop",
    image:
      "https://res.cloudinary.com/dgwmfee0i/image/upload/v1692809399/icons8-small-business-96_cna6rj.png",
  },
  {
    id: 2,
    text: "Mobiles",
    image:
      "https://rukminim1.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100",
  },
  {
    id: 3,
    text: "Fashion",
    image:
      "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100",
  },
  {
    id: 4,
    text: "Electronics",
    image:
      "https://rukminim1.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100",
  },
  {
    id: 5,
    text: "Home & Furniture",
    image:
      "https://rukminim2.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100",
  },
  {
    id: 6,
    text: "Appliances",
    image:
      "https://rukminim1.flixcart.com/flap/80/80/image/0ff199d1bd27eb98.png?q=100",
  },
  {
    id: 7,
    text: "Travel",
    image:
      "https://rukminim2.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100",
  },
  {
    id: 8,
    text: "Beauty, Toys & More",
    image:
      "https://rukminim2.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100",
  },
  {
    id: 9,
    text: "Two Wheelers",
    image:
      "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100",
  },
];

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm py-2 px-2 md:px-[6%] xl:px-[9%] overflow-hidden overflow-x-auto">
      <ul className="w-full flex items-center space-x-6 lg:space-x-11">
        {navItmes.map(item => (
          <NavItem key={item.id} text={item.text} image={item.image} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
