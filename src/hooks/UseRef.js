import React, { useState, useRef, useEffect } from "react";

export default function UseRef() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  //   const [renderCnt, setRenderCnt] = useState(0);
  const renderCnt = useRef(0);

  let countVar = 0;

  console.log("렌더링");
  console.log(countRef);
  const addCount = () => {
    setCount(count + 1);
  };
  const addRef = () => {
    countRef.current = countRef.current + 1;
    console.log("ref : ", countRef.current);
  };
  const addVar = () => {
    countVar += 1;
    console.log("var : ", countVar);
    // var가 증가된 값으로 찍히지 않는 이유는 리렌더링 시 컴포넌트 함수가 다시 호출되면서 내부 변수는
    // 리셋되었기 때문에 결과적으로 렌더링에 영향을 끼치지 못한것
  };

  //   useEffect(() => {
  //     setRenderCnt(renderCnt + 1);
  //     return () => {};
  //   }, [renderCnt]);
  useEffect(() => {
    renderCnt.current = renderCnt.current + 1;
    console.log("렌더링 횟수 : " + renderCnt.current);
  });

  return (
    <div>
      <p>state : {count}</p>
      <p>ref : {countRef.current}</p>
      <p>var : {countVar}</p>
      <button onClick={addCount}>count +</button>
      <button onClick={addRef}>ref +</button>
      <button onClick={addVar}>var +</button>
    </div>
  );
}
