import { useDispatch, useSelector } from "react-redux";
import { updatePlace, updateData } from "../actions";

export default function Form() {
  const place = useSelector((state) => state.place);
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <div className="col-12 form">
      <input
        className = {theme?"input-dark":""}
        type="text"
        value={place}
        onChange={(e) => {
          dispatch(updatePlace(e.target.value));
        }}
      />
      <button
        className={theme ? "btn btn-light " : "btn btn-dark "}
        onClick={() => {
          dispatch(updateData(place));
        }}
      >
        Submit{" "}
      </button>
    </div>
  );
}
