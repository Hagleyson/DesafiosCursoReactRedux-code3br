import React from "react"

class Mega extends React.Component{
    state=({
        number: this.props.numbeer  | 0 ,
        numbers: []               
    })               
    
    handleChange = (e) => {
        this.setState({
            number: +e.target.value
        })
    }    
    handleClick = (valor)=>{ 
        const numbers = []  
        for(var i = 0; i !== valor;i++){                      
         let al = parseInt( Math.random() * 60)               
          for(var y = 0;y <= numbers.length;y++){
              if(numbers[y]===al){    
                  console.log("ERRROOOO",al) 
                  this.handleClick(valor)             
                  return false
              }
          }
          numbers[i]=al
        }            
        console.log(numbers)   
        this.setState({
            numbers: numbers
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