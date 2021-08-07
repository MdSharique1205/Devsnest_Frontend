export default function Modal ({name,setName,cal,setCal,modal,setModal}){
    return (<div className = "modal">
    <div className = "bg"></div>
    <div className = "editField">
        <input type = "text" value = {name} onChange = {(e)=> (setName(e.target.value))}></input>
        <input type = "text" value = {cal} onChange = {(e)=> (setCal(e.target.value))}></input>
    </div>
</div>)
}