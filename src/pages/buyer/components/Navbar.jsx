import React from 'react';
import { AiOutlineShopping } from 'react-icons/ai'
import { Link } from "react-router-dom";
import { Cart } from './';
import { useStateContext} from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container my-2 mx-4">
      <p className="logo ">
        <Link to="/">
          <span className="text-[#7352FF] font-logo font-bold text-5xl">F</span>
          <span className="text-[#7352FF] font-logo font-light text-3xl">
            arm
          </span>
          <span className="text-[#7352FF] font-logo font-bold text-5xl">X</span>
        </Link>
      </p>

      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  );
}

export default Navbar