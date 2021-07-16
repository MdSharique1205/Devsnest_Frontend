import "./App.css";
import Black from "./components/Black";
import White from "./components/White";

function App() {
  let arr = [];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      arr.push((i + j) % 2);
      // console.log((i + j) ^ 1);
    }
  }
  return (
    <div className="App">
      {arr.map((item, idx) => {
        return item === 1 ? <White key={idx} /> : <Black key={idx} />;
      })}
    </div>
  );
}

export default App;
