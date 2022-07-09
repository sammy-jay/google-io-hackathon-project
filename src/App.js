import React, { useState } from "react";
import SellerApp from "./pages/seller/SellerApp";
import BuyerApp from "./pages/buyer/BuyerApp";

import { ContextProvider } from "./pages/seller/contexts/ContextProvider";
import { StateContext } from "./pages/buyer/context/StateContext";
import Auth from "./pages/auth/Auth";

const App = () => {
  const [isBuyer, setIsBuyer] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);

  if (!isAuthorized) {
    return <Auth />;
  }
  if (isAuthorized && isBuyer) {
    return (
      <StateContext>
        <BuyerApp />
      </StateContext>
    );
  }
  return (
    <ContextProvider>
      <SellerApp />
    </ContextProvider>
  );
};

export default App;
