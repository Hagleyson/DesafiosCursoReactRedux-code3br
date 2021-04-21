import React, { useCallback, useReducer } from "react";
import * as types from "./type";
import * as actionsReducer from "./action";
const initialValues = {
  number: 0,
  mult: 0,
  divid: 0,
  numberInt: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case types.NUMBER:
      return {
        ...state,
        number: action.payload.number,
        mult: action.payload.mult,
        divid: action.payload.divid,
        numberInt: action.payload.numberInt,
      };
    case types.MULTIPLICAR:
      return { ...state, mult: action.payload.mult };
    case types.DIVIDIR:
      return { ...state, divid: action.payload.divid };
    case types.TRASFORMAR:
      return { ...state, numberInt: action.payload.numberInt };
    default:
      break;
  }
}

function UseReducer() {
  const [state, dispacth] = useReducer(reducer, initialValues);
  const handleEnviar = useCallback(
    (e) => {
      dispacth(actionsReducer.number(e.target.value));
    },
    [dispacth]
  );
  const handleMultiplicar = useCallback(() => {
    dispacth(actionsReducer.multiplicar(state.number));
  }, [dispacth, state.number]);
  const handleDividir = useCallback(() => {
    dispacth(actionsReducer.dividir(state.mult));
  }, [dispacth, state.mult]);
  const handleInteger = useCallback(() => {
    dispacth(actionsReducer.interger(state.divid));
  }, [dispacth, state.divid]);
  return (
    <>
      <input type="number" value={state.number} onChange={handleEnviar} />

      <div>
        <p>Número: {state.number}</p>
        <button onClick={handleMultiplicar}>multiplicar por 7</button>
        {state.mult ? (
          <>
            <p>{state.mult}</p>
            <button onClick={handleDividir}>Dividir por 25 </button>
          </>
        ) : null}
        {state.divid ? (
          <>
            <p>{state.divid}</p>
            <button onClick={handleInteger}>Transformar em inteiro </button>
          </>
        ) : null}
        {state.numberInt ? (
          <>
            <p>{state.numberInt}</p>
          </>
        ) : null}
      </div>
    </>
  );
}

export default UseReducer;
