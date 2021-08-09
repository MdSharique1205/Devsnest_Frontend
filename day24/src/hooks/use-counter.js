import { useState,useEffect } from "react";
const useCounter = (increment) =>{

    const [counter,setCounter] = useState(0);
    useEffect(()=>{
        const interval = setInterval(()=>{
            setCounter((prev)=>prev+increment);
        },1000);
        return ()=>clearInterval(interval);
    },[increment]);
    
    return counter;
}

export default useCounter;