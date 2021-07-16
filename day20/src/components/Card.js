import "./style.css";
function Card(props) {
  return (
    <div className="card">
      <h1>{props.name || "template"}</h1>
      <h3>You have consumed {props.cal || 0} calories.</h3>
      <button
        onClick={() => {
          console.log(props);
          const newlist = props.list.filter((item, idx) => idx !== props.index);
          props.setlist(newlist);
        }}
      >
        Delete
      </button>
    </div>
  );
}
export default Card;
