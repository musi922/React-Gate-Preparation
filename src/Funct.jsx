import React, { useState } from "react";


export default function Funct({name}){
    const [count,setCount] = useState(0)

    const increment = () =>{
        setCount(count+1)
    }

    return (
        <>
        <h1>{count}</h1>
        <button onClick={increment}> count</button>
        <h2>{name}</h2>
        </>
    )
}