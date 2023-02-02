import React, { useState, useRef, useEffect } from "react";

export default function UseRef() {
  const inputRef = useRef();
  useEffect(() => {
    console.log(inputRef);
    inputRef.current.focus();
  });

  const login = () => {
    alert(`${inputRef.current.value}`);
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="아이디"></input>
      <button onClick={login}>로그인</button>
    </div>
  );
}
