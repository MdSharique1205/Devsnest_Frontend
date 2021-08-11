import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../actions";

export default function ListTodo() {
  const todolist = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  return (
    <div className="ListTodo">
      {todolist.map((item, idx) => {
        return (
          <div key={idx}>
            <h3>
              {item.title}
              <button
                onClick={() => {
                  dispatch(removeItem(idx));
                }}
              >
                Delete
              </button>
            </h3>
          </div>
        );
      })}
    </div>
  );
}
