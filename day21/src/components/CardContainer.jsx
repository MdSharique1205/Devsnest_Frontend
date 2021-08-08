import Card from "./Card";
import "./style.css";
export default function CardContainer({
  list,
  setList,
  modal,
  setModal,
  setEditKey,
}) {
  return (
    <div className="CardContainer">
      {list.map((item, idx) => {
        return (
          <Card
            key={idx}
            index={idx}
            data={item}
            list={list}
            setList={setList}
            modal={modal}
            setModal={setModal}
            setEditKey={setEditKey}
          ></Card>
        );
      })}
    </div>
  );
}
