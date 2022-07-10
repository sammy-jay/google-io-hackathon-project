import React from "react";
import { Link } from "react-router-dom";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container mt-10">
      <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img
          src={heroBanner.image}
          alt="headphones"
          className="hero-banner-image w-[350px] h-[300px] lg:w-[450px] lg:h-[400px]"
        />

        <div>
          <Link to={`/products/${heroBanner.product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
