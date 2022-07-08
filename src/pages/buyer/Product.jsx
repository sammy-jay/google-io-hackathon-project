import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";

import { Product } from "./components";
import { useStateContext } from "./context/StateContext";


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

const product = {
  _id: 1000,
  image: [
    "https://cdn.sanity.io/images/kyml1h03/production/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.webp",
    "https://cdn.sanity.io/images/kyml1h03/production/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.webp",
    "https://cdn.sanity.io/images/kyml1h03/production/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.webp",
    "https://cdn.sanity.io/images/kyml1h03/production/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.webp",
  ],
  slug: "headphones",
  name: "Headphone",
  details:
    "When your taste in music is so unique, why should your audio wear be any different? Speak your unique style with Rockerz 333 - a bold and powerful wireless earphones for the part of you that wants more. More of sound, more of style, and more of power. Immerse into your jam with boAt Signature Sound and 30 HRS of non stop playback. Let nothing limit your hustle with Dual Pairing that lets you connect two devices at once. Don’t hold back, choose your vibe with Rockerz 333.",
  price: 39,
};

const ProductDetails = () => {
  const {slug} = useParams()
  console.log(slug)
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  };

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container w-[400px]">
            <img src={image[index]} alt="" className="product-detail-image" />
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => (
              <img
                key={i}
                src={item}
                alt=""
                className={
                  i === index ? "small-image selected-image" : "small-image"
                }
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1 className='text-2xl font-bold'>{name}</h1>
          <div className="reviews">
            <div className='flex space-x-[1px]'>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Details: </h4>
          <p>{details}</p>
          <p className="price">${price}</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc flex items-center">
              <span className="minus" onClick={decQty}>
                <AiOutlineMinus />
              </span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={incQty}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
            <button
              type="button"
              className="add-to-cart"
              onClick={() => onAdd(product, qty)}
            >
              Add to Cart
            </button>
            <button type="button" className="buy-now" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
