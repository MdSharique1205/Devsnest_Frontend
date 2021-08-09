import "./style.css";
import { useSelector } from "react-redux";

export default function Display( ) {
  const user = useSelector((state)=>state.userReducer);
  return (
    <div className="display">
      <h2>
        <u>Display</u>
      </h2>
      <h3>Name : {user.name}</h3>
      <h3>Email : {user.email}</h3>
    </div>
  );
}
