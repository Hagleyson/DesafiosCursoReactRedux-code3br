import React from "react"
import style from "./desafios.module.css"
function Desafios(props){
    return (
    <div className={style.container}>
        <div className={style.title}>
        <h1>{props.title}</h1>
        </div>
        
        <div className={style.desafio}>            
        {props.children}
        </div>
    </div>
    )
}
export default Desafios