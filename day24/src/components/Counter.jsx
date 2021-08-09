import useCounter from '../hooks/use-counter';

export default function Counter (){
    const count1 = useCounter(1);
    const count5 = useCounter(5);
    return (
        <div>
        <h3>Incremented by 1 every second : {count1}</h3>
        <h3>Incremented by 5 every second : {count5}</h3>
        </div>
    );
}