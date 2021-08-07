import { useState } from "react";
export default function Card({data,list,setList,index, modal, setModal}){
    const [name,setName] = useState(data[0]);
    const [cal,setCal] = useState(data[1]);
    return (
        <div>
            <h3>{data[0]}</h3>
            <h4>{data[1]} Calories</h4>
            <button onClick = {()=>{
                const newList = list.filter((item,idx)=> idx!==index);
                setList(newList);
            }}>Delete</button>
            <button onClick = {()=>{
                
            }}>Edit</button>
        </div>
    );
}