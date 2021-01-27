import React from "react"

export default function NumerosAleatorios({min,max}){
    const numeros = Math.ceil(Math.random() * (max - min) + min)
    const calculo = Math.ceil(Math.random() * (max - min) + min);
    return(<>
    <p>Número máximo: {max}</p>
    <p>Número minimo: {min}</p>
    <p>Número Aleatório: {numeros}</p>
    </>)
}
