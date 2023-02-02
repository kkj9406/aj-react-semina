import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Content() {
// { isDark }
  const { isDark } = useContext(ThemeContext);
  return (
    <div
      className="content"
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
      }}
    >
      <p>Hello World!</p>
    </div>
  );
}
