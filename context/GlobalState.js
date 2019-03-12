import React, { useState, useEffect, useReducer } from "react";
import TemplateContext from "./templateContext";
import { todoReducer, ADD_TODO, DELETE_TODO, FETCH_TODOS } from "./reducers";

const GlobalState = props => {
  /* eslint-disable */
  // const [todos, setTodos] = useState([]);
  const [cart, setCart] = useState(null);
  // const [cartState, dispatch] = useReducer(todoReducer, { cart: [] });
  const [todosState, dispatch] = useReducer(todoReducer, {
    todos: [{ id: "33", title: "hhh", completed: false }]
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/todos")
      .then(res => res.json())
      .then(todos => {
        // setTodos(todos);
        // console.log("fetch todos glpbalstate", todos);
        dispatch({ type: FETCH_TODOS, payload: todos });
        setIsLoading(false);
      })

      .catch(error => {
        console.log(error);
      });
  }, []);

  /* eslint-enable */

  const addTodoToStore = todo => {
    console.log("Adding todo", todo);
    dispatch({ type: ADD_TODO, todo: todo });
  };

  // console.log("todosState", todosState);

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