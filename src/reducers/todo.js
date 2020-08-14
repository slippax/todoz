const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          item: action.payload,
          completed: false,
        },
      ];
    case "DELETE_TODO":
      return state.filter(({ id }) => id !== action.payload);

    case "COMPLETE_TODO":
      return state.map((item) =>
        item.id === action.id ? { ...item, completed: !item.completed } : item
      );
    case "REVERT_TODO":
      return state.map((item) =>
        item.id === action.id ? { ...item, completed: !item.completed } : item
      );
    case "DELETE_PROGRESS":
      return state.filter(({ ...item }) => item.completed === true);
    case "DELETE_COMPLETED":
      return state.filter(({ ...item }) => item.completed === false);
    default:
      return state;
  }
};

export default todoReducer;
