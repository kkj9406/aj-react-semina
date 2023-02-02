import React, { useReducer, useState } from "react";

// reducer - state를 업데이트하는 역할 (은행)
// dispatch - state 업데이트를 위한 요구
// action - 요구의 내용

export default function UseReducer() {
  const [num, setNum] = useState(0);
  const ACTION_TYPES = {
    deposit: "deposit",
    withdraw: "withdraw",
  };
  const reducer = (state, action) => {
    console.log("reducer가 일을함", state, action);
    //..
    switch (action.type) {
      case ACTION_TYPES.deposit:
        return state + action.payload;
      case ACTION_TYPES.withdraw:
        return state - action.payload;
      default:
        return state;
    }
  };
  const [money, dispatch] = useReducer(reducer, 0); // reducer와 초기값

  return (
    <div>
      <h2>Welcome to Bank</h2>
      <p>잔고 : {money}원</p>
      <input
        type={"number"}
        value={num}
        onChange={(e) => setNum(parseInt(e.target.value))}
        step="1000"
      ></input>
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPES.deposit, payload: num });
        }}
      >
        예금
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPES.withdraw, payload: num });
        }}
      >
        출금
      </button>
    </div>
  );
}
