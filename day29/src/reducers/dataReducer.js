const data = (state = "", action) => {
  switch (action.type) {
    case "UPDATE_DATA":
      return action.payload;
    default:
      return state;
  }
};
export default data;
