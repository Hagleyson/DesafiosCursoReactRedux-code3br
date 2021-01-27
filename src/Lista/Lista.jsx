import React from "react"

export default function Lista(){
    const lista = [
        {id: "1",produto:"Arroz",preco:'4,99' },
        {id: "1",produto:"Feijão",preco:'6,99' },
        {id: "1",produto:"Coxão Mole",preco:'34,99' },
        {id: "1",produto:"Frango",preco:'10,99' },
        {id: "1",produto:"Coentro",preco:'0,99' }

    ]

return (
    <>
    <ul>
        {lista.map((cur)=>{
            return (
            <li key={cur.id}>
                <p>Produto: {cur.produto}</p>
                <p>Preço: {cur.preco}</p>
            </li>
            )
        })}
    </ul>
    </>
)
}
