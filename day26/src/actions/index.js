const changeName = (newdata) => {
  return {
    type: "changeName",
    newdata: newdata,
  };
};
const changeEmail = (newdata) => {
  return {
    type: "changeEmail",
    newdata: newdata,
  };
};

export { changeName, changeEmail };
