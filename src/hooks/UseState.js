import React, { useState } from "react";

const heavyWork = () => {
  console.log("heavyWork call");

  return ["김경진", "김기현"];
};

export default function UseState() {
  //   const [names, setNames] = useState(["김경진", "김기현"]);
  const [names, setNames] = useState(heavyWork);
  //   const [names, setNames] = useState(() => {
  //     return heavyWork();
  //   });
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const handelUpload = () => {
    setNames((prevState) => {
      console.log(prevState);
      return [input, ...prevState];
    });
  };

  return (
    <div>
      <input type={"text"} value={input} onChange={handleInputChange} />
      <button onClick={handelUpload}>Upload</button>
      {names.map((name, idx) => {
        return <p key={idx}>{name}</p>;
      })}
    </div>
  );
}
