import React from "react";

// export default React.createContext();
export default React.createContext({
  todos: [],
  cart: [],
  isLoading: false,
  addProductToCart: todo => {},
  removeProductFromCart: todoId => {}
});
