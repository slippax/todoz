export const increment = (nr) => {
  return {
    type: "INCREMENT",
    payload: nr,
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const todo = (name) => {
  return {
    type: "TODO",
    payload: name,
  };
};
let nextTodoId = 0;
export const addTodo = (name) => {
  return {
    type: "ADD_TODO",
    id: nextTodoId++,
    payload: name,
  };
};

export const deleteTodo = (name) => {
  return {
    type: "DELETE_TODO",
    payload: name,
  };
};

export const completedTodo = (id) => {
  return {
    type: "COMPLETED_TODO",
    id
  };
};
