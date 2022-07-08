import React, { useState } from "react";
import SellerApp from "./pages/seller/SellerApp";
import BuyerApp from "./pages/buyer/BuyerApp";

import { ContextProvider } from "./pages/seller/contexts/ContextProvider";
import { StateContext } from './pages/buyer/context/StateContext';

const App = () => {
  const [isBuyer, setIsBuyer] = useState(true);

  if (isBuyer) {
    return (
      <StateContext>
        <BuyerApp/>
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
