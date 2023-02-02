import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

export default function Page() {
  // { isDark, setIsDark }
  const theme = useContext(ThemeContext);
  console.log(theme);

  return (
    <div className="page">
      <Header
      // isDark={isDark}
      ></Header>
      <Content
      // isDark={isDark}
      ></Content>
      <Footer
      // isDark={isDark} setIsDark={setIsDark}
      ></Footer>
    </div>
  );
}
