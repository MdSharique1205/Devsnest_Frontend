import { useState } from "react";
import Form from "./components/Form";
import CardContainer from "./components/CardContainer";
import Modal from './components/Modal';
function App() {
  const [list,setList] = useState([['Potato',10],['Burger',20]]); 
  const [modal,setModal] = useState(false);
  const [editKey,setEditKey] = useState(null);
  return (
    <div className="App">
      {modal?<Modal editKey = {editKey} setEditKey = {setEditKey} list = {list} setList  = {setList} modal = {modal} setModal = {setModal}></Modal>:''}
      <Form list={list} setList = {setList}/>
      <CardContainer list = {list} setList ={setList} modal = {modal} setModal = {setModal} setEditKey = {setEditKey}/>
    </div>
  );
}

export default App;
