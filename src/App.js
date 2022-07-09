import React, { useEffect, useState } from "react";
import SellerApp from "./pages/seller/SellerApp";
import BuyerApp from "./pages/buyer/BuyerApp";
import { onAuthStateChanged } from "firebase/auth";
import { ContextProvider } from "./pages/seller/contexts/ContextProvider";
import { StateContext } from "./pages/buyer/context/StateContext";
import Auth from "./pages/auth/Auth";
import { auth, db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

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
        setIsAuthorized(false);
      }
    });
  });

  if (isAuthorized === false) {
    return <Auth />;
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
  return(
    <div className="bg-gray-100 min-w-[100vw] min-h-[100vh] flex justify-center items-center">
      <h1 className='text-3xl font-bold'>Loading...</h1>
    </div>
  )
};

export default App;
