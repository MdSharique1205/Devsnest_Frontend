import './style.css';

export default function Form({list,setList}){
    return (
        <div className="formBox">
            <div className ="form">
                <div>
                <label>Food Item : </label> 
                <input type = "text" placeholder="Enter name of the item" id="name"></input>
                </div>
                <div>
                <label>Calories : </label>
                <input type = "text" placeholder="Enter calories of the item" id ="calorie"></input>
                </div>
                <button onClick={()=>{
                    const name = document.getElementById('name').value;
                    const calorie = document.getElementById('calorie').value;
                    if(name&&calorie)
                    {
                        setList([...list,[name,calorie]]);
                        console.log(list);
                    }
                    
                }}>Add</button>
            </div>
        </div>
    );
}