import React, { useMemo, useState } from "react";

const hardCalculate = (num) => {
  console.log("어려운 계산");
  for (let i = 0; i < 999999999; i++) {} // 계산중
  return num + 10000;
};

const easyCalculate = (num) => {
  console.log("쉬운 계산");
  return num + 1;
};

export default function UseMemo() {
  const [hardNum, setHardNum] = useState(1);
  const [easyNum, setEasyNum] = useState(1);
  //   const hardSum = hardCalculate(hardNum); // 성능저하 일으키는 함수. 이로인해 쉬운계산 시에도 호출되어 느려짐..
  const hardSum = useMemo(() => {
    return hardCalculate(hardNum); // Memoization하여 개선
  }, [hardNum]);
  const easySum = easyCalculate(easyNum);

  return (
    <div>
      <h3>어려운 계산</h3>
      <input
        type={"number"}
        value={hardNum}
        onChange={(e) => {
          setHardNum(parseInt(e.target.value));
        }}
      />
      <span> + 10000 = {hardSum}</span>

      <h3>쉬운 계산</h3>
      <input
        type={"number"}
        value={easyNum}
        onChange={(e) => {
          setEasyNum(parseInt(e.target.value));
        }}
      />
      <span> + 1 = {easySum}</span>
    </div>
  );
}
