import { useState, useEffect } from "react";
import React from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";
import { useRouter } from "next/router";
import { useStateContext } from "../context/StateContext";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantity } = useStateContext();
  const [order, setorder] = useState(null);
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantity(0);
  }, []);
  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thanks for your order!</h2>
        <p className="email-msg">Recept is sent to your mailbox.</p>
        <p className="description">
          If you are having problems, please contact us through
          <a className="email" href="mailto:20020284@vnu.edu.vn">
            20020284@vnu.edu.vn
          </a>
        </p>
        <Link href="/">
          <button type="button" width={300} className="btn">
            Continue shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
