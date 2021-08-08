export default function Card({ data, list, setList, index, modal, setModal,setEditKey }) {
  return (
    <div>
      <h3>{data[0]}</h3>
      <h4>{data[1]} Calories</h4>
      <button
        onClick={() => {
          const newList = list.filter((item, idx) => idx !== index);
          setList(newList);
        }}
      >
        Delete
      </button>
      <button
        onClick={() => {
          setModal(true);
          setEditKey(index);
        }}
      >
        Edit
      </button>
    </div>
  );
}
