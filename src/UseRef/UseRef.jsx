import React, {useEffect, useRef, useState} from "react"
function merge(num,num2){
    return [...num].map((e,i)=>{
        return `${e}${(num2[i] ||"")}`
    }).join("")
}
function UseRef(){
    const [value,setValue] = useState("")
    const [value2,setValue2] = useState("")
    const input1 = useRef()
    const input2 = useRef()
    useEffect(()=>{
        input2.current.focus()        
    },[value])
    useEffect(()=>{
        input1.current.focus()        
    },[value2])
    return(
        <>
        <h2>{merge(value, value2)}</h2>
        <input ref={input1} type="text" value={value} onChange={(e)=>{setValue(e.target.value)}} />
        <br/>
        <input ref={input2} type="text" value={value2} onChange={(e)=>{setValue2(e.target.value)}} />
        </>
    )
}
export default UseRef