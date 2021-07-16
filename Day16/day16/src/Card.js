import "./style.css";

function Card({ url }) {
  return (
    <div className="card">
      <img src= {url} alt = 'Imagee'></img>
    </div>
  );
}

export default Card;
