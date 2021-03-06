import React, {  useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { Toaster } from "react-hot-toast";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import {  useStateContext } from "./contexts/ContextProvider";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Home,
  Orders,
  Customers,
  ListedProducts,
  AddProduct,
  Adverts,
  Settings,
} from "./index";
import "./SellerApp.css";


const SellerApp = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);


  return (
      <div className={currentMode === "Dark" ? "dark" : ""}>
        <BrowserRouter>
        <Toaster/>
          <div className="flex relative dark:bg-main-dark-bg">
            <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
              <TooltipComponent content="Settings" position="Top">
                <button
                  type="button"
                  onClick={() => setThemeSettings(true)}
                  style={{ background: currentColor, borderRadius: "50%" }}
                  className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                >
                  <FiSettings />
                </button>
              </TooltipComponent>
            </div>
            {activeMenu ? (
              <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                <Sidebar />
              </div>
            ) : (
              <div className="w-0 dark:bg-secondary-dark-bg">
                <Sidebar />
              </div>
            )}
            <div
              className={
                activeMenu
                  ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
                  : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
              }
            >
              <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                <Navbar />
              </div>
              <div>
                {themeSettings && <ThemeSettings />}

                <Routes>
                  {/* dashboard  */}
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  {/* Prdoducts */}
                  <Route path="/listed" element={<ListedProducts />} />
                  <Route path="/add" element={<AddProduct />} />
                  <Route path="/adverts" element={<Adverts />} />
                  {/* pages  */}
                  <Route path="/orders" element={<Orders />} />
                  <Route path="/customers" element={<Customers />} />
                  <Route path="/settings" element={<Settings />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </div>
        </BrowserRouter>
      </div>
  );
};

export default SellerApp;
