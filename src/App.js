import React, { useEffect, useState } from "react";
import SellerApp from "./pages/seller/SellerApp";
import BuyerApp from "./pages/buyer/BuyerApp";
import { onAuthStateChanged } from "firebase/auth";
import { ContextProvider } from "./pages/seller/contexts/ContextProvider";
import { StateContext } from "./pages/buyer/context/StateContext";
import Auth from "./pages/auth/Auth";
import { auth, db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import toast, { Toaster } from 'react-hot-toast';

const App = () => {
  const [isBuyer, setIsBuyer] = useState(null);
  const [isAuthorized, setIsAuthorized] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthorized(true);
        const uid = user.uid;
        getDocs(collection(db, "users"))
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              const { userType, userId } = doc.data();
              if (userId === uid) {
                if (userType === "buyer") {
                  setIsBuyer(true);
                  return;
                }
                setIsBuyer(false);
              }
              return;
            });
          })
          .catch((e) => console.log(e));
      } else {
        toast.success("Redirecting...");
        setIsAuthorized(false);
      }
    });
  });

  if (isAuthorized === false) {
    return (
      <>
      <Toaster/>
        <Auth />
      </>
    );
  }
  if (isAuthorized === true && isBuyer === true) {
    return (
      <StateContext>
        <BuyerApp />
      </StateContext>
    );
  }
  if (isAuthorized === true && isBuyer === false) {
    return (
      <ContextProvider>
        <SellerApp />
      </ContextProvider>
    );
  }
  return (
    <div className="bg-gray-100 min-w-[100vw] min-h-[100vh] flex justify-center items-center flex-col">
      <p className="">
        <span className="text-[#7352FF] font-logo font-bold text-7xl">F</span>
        <span className="text-[#7352FF] font-logo font-light text-5xl">
          arm
        </span>
        <span className="text-[#7352FF] font-logo font-bold text-7xl">X</span>
        <span className="text-[#7352FF] font-logo font-light text-5xl">
          {" "} now loading...
        </span>
      </p>
    </div>
  );
};

export default App;
