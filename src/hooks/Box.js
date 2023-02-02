import React, { useEffect, useState } from "react";

export default function Box({ createBoxStyle }) {
  const [style, setStyle] = useState({});

  useEffect(() => {
    console.log("박스 키우기"); // 테마변경해도 createBoxStyle이 재할당되어 변경으로 인식해 호출되는 비효율
    setStyle(createBoxStyle());
  }, [createBoxStyle]);

  return <div style={style}></div>;
}
