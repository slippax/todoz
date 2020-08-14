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

export const completeTodo = (id) => {
  return {
    type: "COMPLETE_TODO",
    id
  };
};

export const revertTodo = (id) => {
  return {
    type: "REVERT_TODO",
    id
  };
};

export const deleteProgress = () => {
  return{
    type: "DELETE_PROGRESS",
  }
}

export const deleteCompleted = () => {
  return{
    type: "DELETE_COMPLETED",
  }
}