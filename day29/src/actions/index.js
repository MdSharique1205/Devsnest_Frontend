const updatePlace = (place) => {
  return {
    type: "UPDATE_PLACE",
    payload: place,
  };
};

const updateData = (data) => {
  return (dispatch) => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=eb56638403994750a7f203334211108&q=${data}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({
          type: "UPDATE_DATA",
          payload: data,
        });
      });
  };
};
const toggleTheme = () => {
  return {
    type: "TOGGLE_THEME",
  };
};
export { updatePlace, updateData, toggleTheme };
