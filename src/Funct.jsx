import React, { useReducer } from "react";

function reducer(state,action) {
    if (action.type === "increment") {
        return {count:state.count+1}
    }
    else {
        return {count:state.count-1}
    }
}
export default function Funct() {
    const initialstate = {count:0}
    const [state,dispatch] = useReducer(reducer,initialstate)

    
  
    return (
        <>
        <h1>{state.count}</h1>
        <button onClick={()=>dispatch({type:"increment"})}>increment</button>
        <button onClick={()=>dispatch({type:"decrement"})}>decrement</button>
        </>
    );
}