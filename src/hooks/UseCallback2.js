import React, { useCallback, useEffect, useState } from "react";
import Box from "./Box";

export default function UseCallback2() {
  const [size, setSize] = useState(100);
  const [isDark, setIsDark] = useState(false);

  // const createBoxStyle = () => {
  //   return {
  //     backgroundColor: "pink",
  //     width: `${size}px`,
  //     height: `${size}px`,
  //   };
  // };

  const createBoxStyle = useCallback(() => {
    return {
      backgroundColor: "pink",
      width: `${size}px`,
      height: `${size}px`,
    };
  }, [size]); // size 변경하여 렌더링 될시에만 함수 재할당하여 Box컴포넌트에서 쓸데없이 UseEffect호출 안되도록 함
  return (
    <div
      style={{
        background: isDark ? "black" : "white",
      }}
    >
      <input
        type={"number"}
        value={size}
        onChange={(e) => setSize(e.target.value)}
      ></input>
      <button onClick={() => setIsDark(!isDark)}>change Theme</button>
      <Box createBoxStyle={createBoxStyle} />
    </div>
  );
}
