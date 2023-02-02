import React, { useEffect, useMemo, useState } from "react";

export default function UseMemo2() {
  const [num, setNum] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  //   const location = isKorea ? "한국" : "외국"; // 이거는 string일 경우이고 잘 동작함
  const location =
    //{
    // country: isKorea ? "한국" : "외국",
    // 애초에 eslint에서도 useMemo쓰라고 뜸...
    // The 'location' object makes the dependencies of useEffect Hook
    // (at line 16) change on every render.
    // To fix this, wrap the initialization of 'location' in its own useMemo() Hook.
    //};
    useMemo(() => {
      return {
        country: isKorea ? "한국" : "외국",
      };
    }, [isKorea]);

  useEffect(() => {
    console.log("useEffect!");
    // location이 스트링이였다면 잘 동작하나 object라면 매번 호출될 거임
    // 이거는 원시(Primitive) 타입이냐 객체(Object) 타입이냐 문제로
    // 원시 타입 비교시에는 주소비교가 아닌 값비교를 통해 변경 여부를 본다.
    // 그래서 '한국' === '한국'은 같은 것으로 보아 변경이 없는것으로 인식.
    // 그러나 location이 객체라면 컴포넌트 리렌더링 시 객체 주소가 새로운 주소로 재할당 되고
    // 객체는 주소 비교를 하므로 달라진 것으로 인식하여 결과적으로 useEffect가 동작하는 것..
    return () => {};
  }, [location]);

  return (
    <div>
      <h2>햄최몇?</h2>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <hr />
      <h2>어느 나라에 있어요?</h2>
      {/* <p>나라 : {location}</p> */}
      <p>나라 : {location.country}</p>
      <button onClick={() => setIsKorea(!isKorea)}>비행기 타자</button>
    </div>
  );
}
