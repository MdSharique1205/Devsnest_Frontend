const placeReducer = (state = "Bhilai", action) => {
  switch (action.type) {
    case "UPDATE_PLACE":
      return action.payload;

    default:
      return state;
  }
};
export default placeReducer;
