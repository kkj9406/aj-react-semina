import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Header() {
// { isDark }
  const { isDark } = useContext(ThemeContext);
  return (
    <header
      className="header"
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
        color: isDark ? "white" : "black",
      }}
    >
      <h1>welcome!</h1>
    </header>
  );
}
