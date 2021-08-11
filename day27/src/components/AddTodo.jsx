import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../actions";

export default function AddTodo() {
  const [item, setItem] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="AddTodo">
      <input
        type="text"
        placeholder="Todo field"
        value={item}
        onChange={(e) => {
          setItem(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          //Adding to the list
          dispatch(addItem({ title: item, done: false }));
        }}
      >
        Add
      </button>
    </div>
  );
}
