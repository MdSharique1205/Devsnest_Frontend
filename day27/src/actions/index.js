const addItem = (item) => {
  return {
    type: "ADD_ITEM",
    payload: item,
  };
};
const removeItem = (key) => {
  return {
    type: "DELETE_ITEM",
    payload: key,
  };
};
const loadTodo = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((todos) => {
        return dispatch({
          type: "LOAD_TODO",
          payload: todos.splice(0, 5),
        });
      });
  };
};
export { addItem, removeItem, loadTodo };
