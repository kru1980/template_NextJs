import React, { useState, useEffect, useReducer } from "react";
import TemplateContext from "./templateContext";
import * as R from "ramda";
import { todoReducer, ADD_TODO, DELETE_TODO, FETCH_TODOS } from "./reducers";

const GlobalState = props => {
  /* eslint-disable */
  const [cart, setCart] = useState(null);
  const [todosState, dispatch] = useReducer(todoReducer, []);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/todos")
      .then(res => res.json())
      .then(data => {
        setTimeout(dispatch({ type: FETCH_TODOS, payload: data.todos }), 700);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  /* eslint-enable */
  const addTodoToStore = todo => {
    // console.log("go to server new todo", todo);
    dispatch({ type: ADD_TODO, payload: todo });
  };

  const removeTodoFromStore = todoId => {
    dispatch({ type: DELETE_TODO, payload: todoId });
  };

  return (
    <TemplateContext.Provider
      value={{
        todos: todosState,
        cart: cart,
        addTodoToStore: addTodoToStore,
        removeTodoFromCart: removeTodoFromStore,
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
