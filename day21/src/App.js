import { useState } from "react";
import Form from "./components/Form";
import CardContainer from "./components/CardContainer";
function App() {
  const [list,setList] = useState([['Potato',10],['Burger',20]]); 
  const [modal,setModal] = useState(false);
  return (
    <div className="App">
      <Form list={list} setList = {setList}/>
      <CardContainer list = {list} setList ={setList} modal = {modal} setModal = {setModal}/>
    </div>
  );
}

export default App;
