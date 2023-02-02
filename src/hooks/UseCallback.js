import React, { useCallback, useEffect, useState } from "react";

export default function UseCallback() {
  const [num, setNum] = useState(0);
  const [toggle, setToggle] = useState(true);

  //   const someFunc = () => {
  //     console.log(`someFunc : number : ${num}`);
  //     return;
  //     // The 'someFunc' function makes the dependencies of useEffect Hook (at line 13)
  //     // change on every render. To fix this, wrap the definition of 'someFunc'
  //     //in its own useCallback() Hook.
  //   };

  //   const someFunc = useCallback(() => {
  //     console.log(`someFunc : number : ${num}`);
  //     return;
  //   }, []);// 의존성 배열이 비어있으므로 num은 최초 0인채로 계속 나올 것

  const someFunc = useCallback(() => {
    console.log(`someFunc : number : ${num}`);
    return;
  }, [num]);

  useEffect(() => {
    console.log("someFunc 변경됨");
  }, [someFunc]);

  return (
    <div>
      <input
        type={"number"}
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
      <br />
      <button onClick={someFunc}>call someFunc</button>
    </div>
  );
}
