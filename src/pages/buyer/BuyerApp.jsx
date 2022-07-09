import React from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/globals.css";

import { Navbar, Footer } from "./components/";

import Home from "./Home";
import ProductDetails from "./Product";

const BuyerApp = () => {
  return (
    <BrowserRouter>
      <div className="layout max-w-[1200px] lg:mx-auto">
        <header>
          <Navbar />
        </header>
        <main className="main-container">
          <Toaster />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:slug" element={<ProductDetails />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default BuyerApp;
