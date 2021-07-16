import './style.css';
function Card(props) {
  return <div className="card">
          <h1>{props.name || 'template'}</h1>
          <h3>You have consumed {props.cal || 0} calories.</h3>        
      </div>;
}
export default Card;
