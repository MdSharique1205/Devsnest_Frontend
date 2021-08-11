import "./App.css";
import AddTodo from "./components/AddTodo";
import ListTodo from "./components/ListTodo";
import { loadTodo } from "./actions";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodo></AddTodo>
      <ListTodo />
      <button
        onClick={() => {
          dispatch(loadTodo());
        }}
      >
        Load Todos
      </button>
    </div>
  );
}

export default App;
