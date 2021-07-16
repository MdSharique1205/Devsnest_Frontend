import "./app.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Card name="Burger" cal="20" />
      <Card name="Pizza " cal="30" />
      <Card name="Crossaint" cal="40" />
      <Card name="French Fries " cal="50" />
      <Card name="Coke" cal="60" />
    </div>
  );
}

export default App;
