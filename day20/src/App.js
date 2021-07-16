import "./app.css";
import Card from "./components/Card";
import { useState } from "react";

function App() {
  const [list, setlist] = useState([
    { name: "Burger", cal: 20 },
    { name: "Pizza", cal: 30 },
    { name: "Crossaint", cal: 40 },
    { name: "French Fries", cal: 50 },
    { name: "Coke", cal: 60 },
  ])
  return (
    <div className="App">
      {
        list.map((item,index) =>(
        <Card key={index} name={item.name} cal={item.cal} list={list} setlist ={setlist} index ={index} />)) 
      }
      </div>
  );
}

export default App;
