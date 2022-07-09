import React, { useRef, useState } from "react";
import { Button } from "./components";
import { useStateContext } from "./contexts/ContextProvider";
import {
  XIcon,
} from "@heroicons/react/outline";

const AddProduct = () => {
  const { currentColor, currentMode } = useStateContext();
  const [selectedFile, setSelectedFile] = useState(null);
  const filePickerRef = useRef(null);

    const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };


  return (
    <div className="max-w-[1200px] flex lg:mx-auto m-2 w-[95%] md:m-10 mt-24 p-5 md:p-10 space-y-5 lg:space-y-0 lg:space-x-5 flex-col lg:flex-row  ">
      <div className="flex justify-center items-center w-full">
        {selectedFile ? (
          <div className="relative">
            <div
              className="absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer"
              onClick={() => setSelectedFile(null)}
            >
              <XIcon className="text-white h-5" />
            </div>
            <img
              src={selectedFile}
              alt=""
              className="rounded-2xl max-h-80 object-contain"
            />
          </div>
        ) : (
          <label
            htmlFor="dropzone-file"
            className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-secondary-dark-bg hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div
              // onClick={() => filePickerRef.current.click()}
              className="flex flex-col justify-center items-center pt-0 pb-6"
            >
              <svg
                className="mb-3 w-10 h-10 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span>
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                PNG, JPG (MAX. 800x400px)
              </p>
            </div>
            <input
              type="file"
              ref={filePickerRef}
              hidden
              onChange={addImageToPost}
              id="dropzone-file"
              className="hidden"
            />
          </label>
        )}
      </div>

      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-md shadow-md lg:w-4/6 py-4 px-5 h-[100%]">
        <h2 className="font-bold text-xl mb-2">Add Product</h2>
        <div className="flex lg:space-x-6 justify-between mt-5 flex-col lg:flex-row space-y-5 lg:space-y-0">
          <div className="w-full flex flex-col">
            <label
              htmlFor="firstName"
              className="block mb-3 text-sm  text-gray-500 placeholder:text-sm"
            >
              Product Name
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="green gabbage"
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
              Product Price
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="999"
              className={`flex-grow border px-3 py-1 rounded outline-0 focus:outline-0 placeholder:text-sm bg-white text-base focus:ring-2 dark:border-gray-500 focus:ring-${currentColor} dark:bg-secondary-dark-bg dark:text-white`}
            />
          </div>
        </div>
        <div className="flex lg:space-x-6 justify-between mt-5 flex-col lg:flex-row space-y-5 lg:space-y-0">
          <div className="flex flex-col w-full">
            <label
              htmlFor="email"
              className="block mb-3 text-sm  text-gray-500"
            >
              Product Tags
            </label>
            <input
              type="text"
              id="email"
              placeholder="vegies"
              className={`flex-grow border px-3 py-1 dark:border-gray-500 rounded outline-0 focus:outline-0 placeholder:text-sm bg-white text-base focus:ring-2 focus:ring-${currentColor} dark:bg-secondary-dark-bg dark:text-white`}
            />
          </div>
          <div className="flex flex-col w-full">
            <label
              htmlFor="address"
              className="block mb-3 text-sm  text-gray-500"
            >
              Product Count
            </label>
            <input
              type="text"
              id="address"
              placeholder="100 pieces"
              className={`flex-grow border px-3 py-1 rounded outline-0 focus:outline-0 placeholder:text-sm bg-white text-base focus:ring-2 dark:border-gray-500 focus:ring-${currentColor} dark:bg-secondary-dark-bg dark:text-white`}
            />
          </div>
        </div>

        <div className="flex justify-between mt-5 flex-col space-y-5 lg:space-y-0">
          <label
            htmlFor="lastName"
            className="block mb-3 text-sm  text-gray-500"
          >
            Product Description
          </label>
          <textarea
            id="message"
            rows="4"
            placeholder="description here"
            className={`block w-full border px-3 py-1 rounded outline-0 focus:outline-0 placeholder:text-sm bg-white text-base focus:ring-2 dark:border-gray-500 focus:ring-${currentColor} dark:bg-secondary-dark-bg dark:text-white`}
          ></textarea>
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

export default AddProduct;
