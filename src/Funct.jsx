import React, { useReducer } from "react";
import { act } from "react-dom/test-utils";

function reducer(count,action) {
    if (action.type === "increment") {
        return count+1
    }
    else {
        return count-1
    }
}
export default function Funct() {
   
    const [count,dispatch]= useReducer(reducer,0)

    
  
    return (
        <>
        <h1>{count}</h1>
        <button onClick={()=>dispatch({type:"increment"})}>increment</button>
        <button onClick={()=>dispatch({type:"decrement"})}>decrement</button>
        </>
    );
}