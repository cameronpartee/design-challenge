import React from "react";

/* CONTEXT API HOLDS ITEMS AND FUNCTIONS */
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: (id) => {},
});

export default CartContext;
