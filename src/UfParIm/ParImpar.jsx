import React, { useEffect, useState } from "react"
export default function ParImpar () {
    const [number,setNumber] = useState(0)
    const [type,setType] = useState("par")
    useEffect(()=>{
        setType(number % 2 === 0 ? "Par" : "Impar")
    },[number,setType])
    return(
    <div>
        <div>
            <span>Tipo: {type}</span>
        </div>
        <input type="number" value={number} onChange={e=>setNumber(e.target.value)}/>
    </div>
    )   
}