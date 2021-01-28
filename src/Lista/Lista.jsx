import React from "react"
import style from "./lista.module.css"
export default function Lista(){
    const lista = [
        {id: "1",produto:"Arroz",preco:'4,99' },
        {id: "2",produto:"Feijão",preco:'6,99' },
        {id: "3",produto:"Coxão Mole",preco:'34,99' },
        {id: "4",produto:"Frango",preco:'10,99' },
        {id: "5",produto:"Coentro",preco:'0,99' }

    ]

return (
    <>
    <table className={style.table}>
        <thead>
            <tr>
                <th>Id</th>
                <th>Produto</th>
                <th>Preço</th>
            </tr>
        </thead>
        <tbody>
            {lista.map((cur)=>{
                return (
                    <tr key={cur.id} >
                        <td>{cur.id}</td>
                        <td>{cur.produto}</td>
                        <td>{cur.preco}</td>
                    </tr>            
                )
            })}
            
        </tbody>
    </table>
    </>
)
}
