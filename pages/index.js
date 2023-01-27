import React from "react";
import { client } from "../lib/client";
import { Product, FooterBanner, HeroBanner, Gears } from "../components/index";

const Home = ({ products, bannerData, gears }) => {
  console.log(products);
  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Apple's Devices</h2>
        <p>Featured Apple's Products</p>
      </div>
      <div className="products-container">
        {products
          ?.filter((product) => {
            return product.name.includes("Apple");
          })
          .map((product) => (
            <Product key={product._id} product={product} />
          ))}
      </div>
      <div className="products-heading">
        <h2>PC Gears</h2>
        <p>Featured Logitech's Products</p>
      </div>
      <div className="products-container">
        {products
          ?.filter((product) => {
            return product.name.includes("Logitech");
          })
          .map((product) => (
            <Product key={product._id} product={product} />
          ))}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product" ]';
  const products = await client.fetch(query);
  const gearsQuery = '*[_type == "gears" ]';
  const gears = await client.fetch(gearsQuery);
  const bannerQuery = '*[_type == "banner" ]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData, gears },
  };
};

export default Home;
