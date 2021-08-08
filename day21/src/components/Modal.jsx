export default function Modal ({editKey,setEditKey,list,setList,modal,setModal}){
    
    return (<div className = "modal">
    <div className = "bg"></div>
    <div className = "editField">
        <label>Food name : </label>
        <input type = "text"  class ='input' id = "editName" ></input><br/>
        <label>Calories : </label>
        <input type = "text"  class ='input' id = 'editCal'></input>
        <br/>
        <button onClick ={()=>{
            const name = document.getElementById('editName').value;
            const cal = document.getElementById('editCal').value;
            const newList = list.filter((item,idx)=> 1);
            newList[editKey] = [name,cal];
            setList(newList);
            setModal(false);
        }}>Edit</button>
        <button onClick ={()=> setModal(false)}>Cancel</button>
    </div>
</div>)
}