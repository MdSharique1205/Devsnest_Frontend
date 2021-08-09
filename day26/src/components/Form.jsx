import { changeName, changeEmail } from "../actions";
import { useDispatch, useSelector } from "react-redux";

export default function Form({ setUser }) {
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  return (
    <div className="form">
      <h2>
        <u>Edit</u>
      </h2>
      <input
        placeholder="Name"
        type="text"
        value={user.name}
        onChange={(e) => {
          //   setUser({ ...user, name: e.target.value });
          dispatch(changeName(e.target.value));
        }}
      ></input>
      <br></br>
      <input
        placeholder="Email"
        type="text"
        value={user.email}
        onChange={(e) => {
          //   setUser({ ...user, email: e.target.value });
          dispatch(changeEmail(e.target.value));
        }}
      ></input>
    </div>
  );
}
