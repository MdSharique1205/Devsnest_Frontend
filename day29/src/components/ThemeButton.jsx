import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../actions";
import "../App.css";
export default function ThemeButton() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  return (
    <div className="ThemeButton">
      <button
        className={theme ? "btn btn-light theme" : "btn btn-dark theme"}
        onClick={() => {
          dispatch(toggleTheme());
        }}
      >
        {theme ? "Dark" : "Light"}
      </button>
    </div>
  );
}
