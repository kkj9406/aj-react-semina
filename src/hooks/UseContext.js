import React, { useState } from "react";
import Page from "./components/Page";
import "./components/context.css";
import { ThemeContext } from "./context/ThemeContext";

export default function UseContext() {
  const [isDark, setIsDark] = useState(false);
  return (
    // <ThemeContext.Provider value={{ isDark, setIsDark }}>
    //   <Page isDark={isDark} setIsDark={setIsDark}></Page>
    <Page></Page>
    // </ThemeContext.Provider>
  );
}
