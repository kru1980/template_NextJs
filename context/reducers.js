export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const FETCH_TODOS = "FETCH_TODO";

const addTodoToCart = (product, state) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(item => item.id === todo.id);

  if (updatedItemIndex < 0) {
    updatedCart.push({ ...product, quantity: 1 });
  } else {
    const updatedItem = {
      ...updatedCart[updatedItemIndex]
    };
    updatedItem.quantity++;
    updatedCart[updatedItemIndex] = updatedItem;
  }
  return { ...state, cart: updatedCart };
};

const removeTodoFromCart = (todoId, state) => {
  // console.log("Removing product with id: " + todoId);
  const updatedTodo = [...state.todos];
  const updatedItemIndex = updatedTodo.findIndex(item => item.id === todoId);

  // const updatedItem = {
  //   ...updatedTodo[updatedItemIndex]
  // };
  // updatedItem.quantity--;
  // if (updatedItem.quantity <= 0) {
  //   updatedTodo.splice(updatedItemIndex, 1);
  // } else {
  //   updatedTodo[updatedItemIndex] = updatedItem;
  // }
  return { ...state, todo: updatedTodo };
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      const newState = state.todos.concat(...action.payload.todos);
      return { todos: newState };
    case ADD_TODO:
      return addTodoToCart(action.todo, state);
    case DELETE_TODO:
      return removeTodoFromCart(action.todoId, state);
    default:
      return state;
  }
};
