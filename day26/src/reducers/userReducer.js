const userReducer = (
  state = { name: "John Doe", email: "abcd@gmail.com" },
  action
) => {
  switch (action.type) {
    case "changeName":
      return (state = { ...state, name: action.newdata });
    case "changeEmail":
      return (state = { ...state, email: action.newdata });
    default:
      return state;
  }
};
export default userReducer;
