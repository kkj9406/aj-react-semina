import React, { useEffect, useState } from "react";

export default function UseEffect() {
  let i = 0;
  const [num, setNum] = useState(0);
  useEffect(() => {
    console.log("componentDidMount");

    return () => {
      console.log("componentWillUnmount1");
    };
  }, []);
  useEffect(() => {
    console.log("componentDidUpdate");

    return () => {
      console.log("componentWillUnmount2");
    };
  });
  useEffect(() => {
    console.log("i effect");

    return () => {
      console.log("i cleanup");
    };
  }, [i]);
  useEffect(() => {
    console.log("num effect");
    // 구독과 관련된 로직이라면
    // 이벤트 리스너 등록이라면
    return () => {
      console.log("num cleanup");
      // 해지를 하고
      // 리스너 제거를 하고
    };
  }, [num]);

  return (
    <div>
      <p>{i}</p>
      <p>{num}</p>
      <button
        onClick={() => {
          i += 1;
          setNum(num + 1);
        }}
      >
        +
      </button>
    </div>
  );
}
