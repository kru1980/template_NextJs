import React, { useState, useEffect, useReducer } from "react";
import TemplateContext from "./templateContext";
import * as R from "ramda";
import { todoReducer, ADD_TODO, DELETE_TODO, FETCH_TODOS } from "./reducers";

const GlobalState = props => {
  /* eslint-disable */
  const [todosState, setTodosState] = useState([]);
  const [cart, setCart] = useState(null);
  // const [cartState, dispatch] = useReducer(todoReducer, { cart: [] });
  // const [todosState, dispatch] = useReducer(todoReducer, {
  //   todos: [{ id: "33", title: "hhh", completed: false }]
  // });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/todos")
      .then(res => res.json())
      .then(data => {
        const todos = R.values(data);
        console.log("fetch todos glpbalstate todos=", todos);
        setTodosState(todos);
        // console.log("fetch todos glpbalstate todosState=", todosState);
        // dispatch({ type: FETCH_TODOS, payload: todos });

        setIsLoading(false);
      })

      .catch(error => {
        console.log(error);
      });
  }, []);

  /* eslint-enable */
  console.log("fetch todos globalstate todosState=", todosState);
  const addTodoToStore = todo => {
    console.log("go to server new todo", todo);
    // // dispatch({ type: ADD_TODO, todo: todo });
    setTodosState(todo);
    setIsLoading(false);
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
