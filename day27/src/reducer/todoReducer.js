const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "DELETE_ITEM":
      return state.filter((itm, idx) => idx !== action.payload);
    case "LOAD_TODO":
      return action.payload;
    default:
      return state;
  }
};

export default todoReducer;
