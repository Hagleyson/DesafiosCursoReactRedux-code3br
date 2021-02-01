import * as types from "./type"

export function number(num){
    return{
        type:types.NUMBER,
        payload:{
            number:num,            
            mult:0,
            divid: 0,
            numberInt:0
        }
    }
}

export function multiplicar(num){
    return {
        type:types.MULTIPLICAR,
        payload:{
            mult: (num * 7)
        }    
    }
}

export function dividir(num){
    return{
        type:types.DIVIDIR,
        payload:{
            divid:(num/25)
        }
    }
}
export function interger(num){
    return{
        type:types.TRASFORMAR,
        payload:{
            numberInt: parseInt(num)
        }
    }
}