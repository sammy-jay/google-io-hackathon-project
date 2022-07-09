import React, { useState } from "react";

const Auth = () => {
  const [isBuyer, setIsBuyer] = useState(true);
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="bg-gray-100 min-w-[100vw] min-h-[100vh]">
      <div className=" py-20 max-w-[600px] mx-auto px-5 w-[90%]">
        <div className="flex justify-around items-baseline">
          <button
            onClick={() => setIsBuyer((prev) => true)}
            className={`hover:drop-shadow-xl cursor-pointer  rounded px-5 py-2 text-xl outline-0   ${
              isBuyer
                ? "text-white bg-[#7352ff]"
                : "hover:text-white bg-white hover:bg-[#7352ff]"
            }`}
          >
            Buyer
          </button>

          <button
            onClick={() => setIsBuyer((prev) => false)}
            className={`hover:drop-shadow-xl cursor-pointer  rounded px-5 py-2 text-xl outline-0   ${
              !isBuyer
                ? "text-white bg-[#7352ff]"
                : "hover:text-white bg-white hover:bg-[#7352ff]"
            }`}
          >
            Seller
          </button>
        </div>
        {isBuyer ? (
          <div className="mt-10 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-md shadow-md  py-10 px-8 h-[100%]">
            <h2 className="font-bold text-2xl mb-2">
              {isLogin ? "Login as a buyer" : "Register as a buyer"}
            </h2>

            {!isLogin && (
              <div className="flex lg:space-x-6 justify-between mt-6 flex-col lg:flex-row space-y-5 lg:space-y-0">
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
              rounded outline-0 focus:outline-0 placeholder:text-sm bg-white text-base focus:ring-2 focus:ring-[#7352ff] dark:bg-secondary-dark-bg dark:text-white`}
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
                    className={`flex-grow border px-3 py-1 rounded outline-0 focus:outline-0 placeholder:text-sm bg-white text-base focus:ring-2 dark:border-gray-500 focus:ring-[#7352ff] dark:bg-secondary-dark-bg dark:text-white`}
                  />
                </div>
              </div>
            )}
            <div
              className={`flex  justify-between mt-8 flex-col ${
                isLogin
                  ? "lg:flex-col lg:space-x-0 lg:space-y-5"
                  : "lg:flex-row lg:space-x-6 lg:space-y-0"
              } space-y-5 `}
            >
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
                  className={`flex-grow border px-3 py-1 dark:border-gray-500 rounded outline-0 focus:outline-0 placeholder:text-sm bg-white text-base focus:ring-2 focus:ring-[#7352ff] dark:bg-secondary-dark-bg dark:text-white`}
                />
              </div>
              <div className="flex flex-col w-full">
                <label
                  htmlFor="address"
                  className="block mb-3 text-sm  text-gray-500"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="address"
                  placeholder="Password"
                  className={`flex-grow border px-3 py-1 rounded outline-0 focus:outline-0 placeholder:text-sm bg-white text-base focus:ring-2 dark:border-gray-500 focus:ring-[#7352ff] dark:bg-secondary-dark-bg dark:text-white`}
                />
              </div>
            </div>
            <span
              className="block my-3 mt-5 cursor-pointer hover:underline text-gray-700"
              onClick={() => setIsLogin((prev) => !prev)}
            >
              {isLogin ? "New user? Register" : "Already a user? Login"}
            </span>
            <div className="mt-6">
              <button
                type="button"
                className={`text-white bg-[#7352ff] rounded py-2 px-4 hover:drop-shadow-xl `}
              >
                {isLogin ? "Login" : "Register"}
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-10 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-md shadow-md  py-10 px-8 h-[100%]">
            <h2 className="font-bold text-2xl mb-2">
              {isLogin ? "Login as a seller" : "Register as a seller"}
            </h2>

            {!isLogin && (
              <div className="flex lg:space-x-6 justify-between mt-6 flex-col lg:flex-row space-y-5 lg:space-y-0">
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
              rounded outline-0 focus:outline-0 placeholder:text-sm bg-white text-base focus:ring-2 focus:ring-[#7352ff] dark:bg-secondary-dark-bg dark:text-white`}
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
                    className={`flex-grow border px-3 py-1 rounded outline-0 focus:outline-0 placeholder:text-sm bg-white text-base focus:ring-2 dark:border-gray-500 focus:ring-[#7352ff] dark:bg-secondary-dark-bg dark:text-white`}
                  />
                </div>
              </div>
            )}
            <div
              className={`flex  justify-between mt-8 flex-col ${
                isLogin
                  ? "lg:flex-col lg:space-x-0 lg:space-y-5"
                  : "lg:flex-row lg:space-x-6 lg:space-y-0"
              } space-y-5 `}
            >
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
                  className={`flex-grow border px-3 py-1 dark:border-gray-500 rounded outline-0 focus:outline-0 placeholder:text-sm bg-white text-base focus:ring-2 focus:ring-[#7352ff] dark:bg-secondary-dark-bg dark:text-white`}
                />
              </div>
              <div className="flex flex-col w-full">
                <label
                  htmlFor="address"
                  className="block mb-3 text-sm  text-gray-500"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="address"
                  placeholder="Password"
                  className={`flex-grow border px-3 py-1 rounded outline-0 focus:outline-0 placeholder:text-sm bg-white text-base focus:ring-2 dark:border-gray-500 focus:ring-[#7352ff] dark:bg-secondary-dark-bg dark:text-white`}
                />
              </div>
            </div>
            <span
              className="block my-3 mt-5 cursor-pointer hover:underline text-gray-700"
              onClick={() => setIsLogin((prev) => !prev)}
            >
              {isLogin ? "New user? Register" : "Already a user? Login"}
            </span>
            <div className="mt-6">
              <button
                type="button"
                className={`text-white bg-[#7352ff] rounded py-2 px-4 hover:drop-shadow-xl `}
              >
                {isLogin ? "Login" : "Register"}
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="mt-24">
        <p className="text-gray-700 text-center p-20">
          © {new Date().getFullYear()} All rights reserved by FarmX
        </p>
      </div>
    </div>
  );
};

export default Auth;
