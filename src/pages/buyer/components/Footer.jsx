import { signOut } from 'firebase/auth';
import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';
import { auth } from '../../../firebase';

const Footer = () => {
  return (
    <div className="footer-container mt-32">
      <button
        type="button"
        className="rounded-md bg-[#7352ff] text-gray-200 px-4 py-2 "
        onClick={() => {
          signOut(auth)
            .then(() => {
              // Sign-out successful.
            })
            .catch((error) => {
              // An error happened.
            });
        }}
      >
        Logout
      </button>
      <p> © {new Date().getFullYear()} All rights reserved by FarmGrove</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  );
}

export default Footer