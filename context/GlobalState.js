import React, { useState, useEffect } from "react";
import TemplateContext from "./templateContext";

const GlobalState = props => {
  /* eslint-disable */
  const [todos, setTodos] = useState([]);
  // const [todos, setTodos] = useState([{ id: "111", title: "hi" }]);
  const [cart, setCart] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/todos")
      .then(res => res.json())
      .then(todos => {
        // console.log("fetch todos glpbalstate", todos);
        setTodos(todos);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  /* eslint-enable */

  const addProductToCart = todo => {
    console.log("Adding todo", todo);
    // пишем функцию обработчик, обновляем состояние
  };

  const removeProductFromCart = todoId => {
    console.log("Removing todo with id: " + todoId);
  };

  return (
    <TemplateContext.Provider
      value={{
        todos: todos,
        cart: cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
        isLoading: isLoading
      }}
    >
      {props.children}
    </TemplateContext.Provider>
  );
};
const TemplateConsumer = TemplateContext.Consumer;
export default GlobalState;
export { TemplateConsumer };
