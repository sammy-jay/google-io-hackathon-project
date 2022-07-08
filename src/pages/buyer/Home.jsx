import React from "react";
import { Product, FooterBanner, HeroBanner } from "./components";

const bannerData = [
  {
    discount: "",
    largeText1: "HEADPHONES",
    largeText2: "",
    saleTime: "",
    smallText: "headphones",
    midText: "Wireless",
    desc: "The game begins here. With Immortal 1000D gaming headphones, don’t just play the game - feel it, live it, and own it. Level up your audio game with 7.1 Channel",
    product: "headphones",
    buttonText: "Shop Now",
    image:
      "https://cdn.sanity.io/images/kyml1h03/production/a205aaa5ac2c75342801e683c3b78ea2fff8913b-600x600.webp",
  },
  {
    discount: "29% OFF",
    largeText1: "Fine",
    largeText2: "Smile",
    saleTime: "29 June to 29 July",
    smallText: "Beats Solo Air",
    midText: "Summer Sale",
    desc: "Tcompany that's grown from 270 to 480 employees in the last 12 months.",
    product: "headphones",
    buttonText: "Shop Now",
    image:
      "https://cdn.sanity.io/images/kyml1h03/production/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.webp",
  },
];

const products = [
  {
    _id: 1001,
    name: "Bass Headphones",
    price: 39,
    image:
      "https://cdn.sanity.io/images/kyml1h03/production/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.webp",
    slug: "headphones",
  },
  {
    _id: 1002,
    name: "Bass Headphones",
    price: 39,
    image:
      "https://cdn.sanity.io/images/kyml1h03/production/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.webp",
    slug: "headphones",
  },
  {
    _id: 1003,
    name: "Bass Headphones",
    price: 39,
    image:
      "https://cdn.sanity.io/images/kyml1h03/production/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.webp",
    slug: "headphones",
  },
  {
    _id: 1004,
    name: "Bass Headphones",
    price: 39,
    image:
      "https://cdn.sanity.io/images/kyml1h03/production/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.webp",
    slug: "headphones",
  },
  {
    _id: 1005,
    name: "Bass Headphones",
    price: 39,
    image:
      "https://cdn.sanity.io/images/kyml1h03/production/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.webp",
    slug: "headphones",
  },
];

const Home = () => {
  return (
    <div className="max-w-[1200px] lg:mx-auto">
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Best Seller Products</h2>
        <p>speaker There are many variations passages</p>
      </div>

      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[1]} />
    </div>
  );
};
export default Home;
