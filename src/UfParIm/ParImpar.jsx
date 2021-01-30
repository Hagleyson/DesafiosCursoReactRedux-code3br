import React, { useEffect, useState } from "react"
function calcular(n){
    if(n%2 === 0 ) return "Par"
    if(n%2 === 1) return "Impar"
}
export default function ParImpar () {
    const [number,setNumber] = useState(0)
    const [type,setType] = useState("par")
    useEffect(()=>{
        setType(calcular(number))
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