import React from "react"
function gerar(array){
    let al = parseInt( Math.random() * 60)   
    return array.includes(al) ? gerar(array): al
}
class Mega extends React.Component{
    state=({
        number: this.props.numbeer  | 0 ,
        numbers: []              
    })               
    
    handleChange = (e) => {
        this.setState({
            number: +e.target.value,
            numbers: Array(+e.target.value).fill(0)
        })
    }    
    handleClick = (valor)=>{ 
          let number = Array(valor).fill(0)
        for(var i = 0; i !== valor;i++){                      
            number[i]=gerar(number)        
        }            
        this.setState({
            numbers: number
        })        
    }
    render(){
        return (
        <>
            <input type="number" value={this.state.number} onChange={this.handleChange}/>
            <button onClick={()=>this.handleClick(this.state.number)}>gerar</button>
            <div>
                <h1>Números</h1>
                    {this.state.numbers.map((cur,idx)=>{
                        return(
                        <span key={idx} > { cur } </span>
                        )
                    })}
            </div>        
            
        </>
        )
    }
}
export default Mega