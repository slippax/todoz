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
    default:
      return state;
  }
};

export default todoReducer;
