import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 Coxedap's Stores</p>
      <p className="icons">
        <a href="https://instagram.com">
          <AiFillInstagram />
        </a>
        <a href="https://twitter.com">
          <AiOutlineTwitter />
        </a>
      </p>
    </div>
  );
};

export default Footer;
