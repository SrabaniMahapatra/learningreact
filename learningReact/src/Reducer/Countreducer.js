import  { useReducer } from "react";

function reducer(state, action) {

  if (action.type === "INCREMENT") {
    return state + 1;
  }

  if (action.type === "DECREMENT") {
    return state - 1;
  }

  if (action.type === "RESET") {
    return 0;
  }

  return state;
}

function Counter() {

  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>

      <h2>{count}</h2>

      <button onClick={() => dispatch({type:"INCREMENT"})}>+</button>

      <button onClick={() => dispatch({type:"DECREMENT"})}>-</button>

      <button onClick={() => dispatch({type:"RESET"})}>Reset</button>

    </div>
  );}



export default Counter;

