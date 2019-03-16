import * as R from "ramda";
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const FETCH_TODOS = "FETCH_TODO";

const addTodoToStore = (todo, todoState) => {
  const prevState = [...todoState];
  const updatedTodo = { ...todo };
  // console.log("updatedTodo", updatedTodo);
  const updatedState = R.append(updatedTodo, prevState);
  // console.log("updatedState", updatedState);
  return updatedState;
};

const removeTodoFromStore = (todoId, todosState) => {
  const prevState = [...todosState];
  const findTodoRemoveIndex = R.findIndex(R.where({ id: R.equals(todoId) }))(
    prevState
  );
  const updatedState = R.remove(findTodoRemoveIndex, 1, prevState);
  return updatedState;
};

export const todoReducer = (todosState, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return R.concat(todosState, action.payload);
    case ADD_TODO:
      return addTodoToStore(action.payload, todosState);
    case DELETE_TODO:
      return removeTodoFromStore(action.payload, todosState);
    default:
      return todosState;
  }
};
