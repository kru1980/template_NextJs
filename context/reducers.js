import * as R from "ramda";
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const FETCH_TODOS = "FETCH_TODO";

const addTodoToStore = (todo, todoState) => {
  const prevState = [...todoState.todos];
  const updatedTodo = { ...todo };
  console.log("updatedTodo", updatedTodo);
  const updatedState = R.append(updatedTodo, prevState);
  console.log("updatedState", updatedState);

  return { todos: prevState };
};

const removeTodoFromStore = (todoId, todoState) => {
  const prevState = [...todoState.todos];
  const findTodoRemoveIndex = R.findIndex(R.where({ id: R.equals(todoId) }))(
    prevState
  );
  const updatedState = R.remove(findTodoRemoveIndex, 1, prevState);

  return { todos: updatedState };
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      const newState = state.todos.concat(...action.payload.todos);
      return { todos: newState };
    case ADD_TODO:
      return addTodoToStore(action.todo, state);
    case DELETE_TODO:
      return removeTodoFromStore(action.payload, state);
    default:
      return state;
  }
};
