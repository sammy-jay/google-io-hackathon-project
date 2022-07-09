import React from "react";
import { Button } from "./components";
import { useStateContext } from "./contexts/ContextProvider";
import { AiOutlineLogout } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoMdInformation } from "react-icons/io";
import { RiLockPasswordLine } from "react-icons/ri";
import avatar from "./data/avatar.jpg";
import {  signOut } from "firebase/auth";
import { auth } from '../../firebase';



const Settings = () => {
  const { currentColor, currentMode } = useStateContext();
  return (
    <div className="max-w-[1000px] flex lg:mx-auto m-2 w-[95%] md:m-10 mt-24 p-5 md:p-10 space-y-5 lg:space-y-0 lg:space-x-5 flex-col lg:flex-row lg:h-[480px] ">
      <div className="flex flex-col space-y-5 lg:w-2/6">
        <div className="dark:text-gray-200 dark:bg-secondary-dark-bg bg-white rounded-md shadow-md py-5 space-y-2 px-5 flex flex-col items-center relative h-[50%]">
          <img
            className="rounded-full w-28 h-28 absolute -top-14"
            src={avatar}
            alt="user-profile"
          />
          <h2 className="font-bold text-lg pt-8">Tolu Soneye</h2>
          <p className="text-sm text-center">I love coding 😎</p>
          <p className="text-sm text-gray-500">techwithtols@gmail.com</p>
        </div>
        <div className="h-[50%] dark:text-gray-200 dark:bg-secondary-dark-bg bg-white rounded-md shadow-md py-5 px-5 flex flex-col divide-y-1 dark:divide-gray-500 justify-around">
          <div className="w-full flex justify-between items-center py-2 px-2 cursor-pointer text-sm">
            <IoMdInformation className="sidebar-icon" />
            <span>Information</span>
            <MdOutlineKeyboardArrowRight />
          </div>
          <div className="w-full flex justify-between items-center py-2 px-2 cursor-pointer  text-sm">
            <RiLockPasswordLine className="sidebar-icon" />
            <span>Password</span>
            <MdOutlineKeyboardArrowRight />
          </div>
          <div className="w-full flex justify-between items-center py-2 px-2 cursor-pointer  text-sm" onClick={() => {
            signOut(auth)
              .then(() => {
                // Sign-out successful.
              })
              .catch((error) => {
                // An error happened.
              });
          }}>
            <AiOutlineLogout className="sidebar-icon" />
            <span>Logout</span>
            <MdOutlineKeyboardArrowRight />
          </div>
        </div>
      </div>
      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-md shadow-md lg:w-4/6 py-10 px-8 h-[100%]">
        <h2 className="font-bold text-xl mb-2">Your Profile</h2>
        <p className="text-gray-500 text-md font-light mb-8">
          Change any information as you want
        </p>
        <div className="flex lg:space-x-6 justify-between mt-8 flex-col lg:flex-row space-y-5 lg:space-y-0">
          <div className="w-full flex flex-col">
            <label
              htmlFor="firstName"
              className="block mb-3 text-sm  text-gray-500 placeholder:text-sm"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              className={`flex-grow border px-3 py-1 
              dark:border-gray-500
              rounded outline-0 focus:outline-0 placeholder:text-sm bg-white text-base focus:ring-2 focus:ring-${currentColor} dark:bg-secondary-dark-bg dark:text-white`}
            />
          </div>
          <div className="flex flex-col w-full">
            <label
              htmlFor="lastName"
              className="block mb-3 text-sm  text-gray-500"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              className={`flex-grow border px-3 py-1 rounded outline-0 focus:outline-0 placeholder:text-sm bg-white text-base focus:ring-2 dark:border-gray-500 focus:ring-${currentColor} dark:bg-secondary-dark-bg dark:text-white`}
            />
          </div>
        </div>
        <div className="flex lg:space-x-6 justify-between mt-8 flex-col lg:flex-row space-y-5 lg:space-y-0">
          <div className="flex flex-col w-full">
            <label
              htmlFor="email"
              className="block mb-3 text-sm  text-gray-500"
            >
              Email Address
            </label>
            <input
              type="text"
              id="email"
              placeholder="Email Address"
              className={`flex-grow border px-3 py-1 dark:border-gray-500 rounded outline-0 focus:outline-0 placeholder:text-sm bg-white text-base focus:ring-2 focus:ring-${currentColor} dark:bg-secondary-dark-bg dark:text-white`}
            />
          </div>
          <div className="flex flex-col w-full">
            <label
              htmlFor="address"
              className="block mb-3 text-sm  text-gray-500"
            >
              Work Address
            </label>
            <input
              type="text"
              id="address"
              placeholder="Work Address"
              className={`flex-grow border px-3 py-1 rounded outline-0 focus:outline-0 placeholder:text-sm bg-white text-base focus:ring-2 dark:border-gray-500 focus:ring-${currentColor} dark:bg-secondary-dark-bg dark:text-white`}
            />
          </div>
        </div>
        <div className="mt-6">
          <Button
            color="white"
            bgColor={currentColor}
            text="Update"
            borderRadius="10px"
          />
        </div>
      </div>
    </div>
  );
};

export default Settings;
