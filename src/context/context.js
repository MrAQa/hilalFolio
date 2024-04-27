// StateContext.js
import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const StateProvider = ({ children }) => {
 const [cartItem, setCartItems] = useState([]) // Initialize your state here

  return (
    <StateContext.Provider value={[cartItem, setCartItems]}>
      {children}
    </StateContext.Provider>
  );
};

export const useCartValue = () => {
  return useContext(StateContext);
};
