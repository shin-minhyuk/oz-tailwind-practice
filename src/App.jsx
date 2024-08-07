import { useState } from "react";
import "./App.css";
import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";
import { createGlobalStyle, css } from "styled-components";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const GlobalStyle = createGlobalStyle`
    ${(props) =>
      props.darkMode === false
        ? css`
            * {
              color: black;
              background-color: #fff;
            }

            #root main header {
              background-color: #fff;
            }

            #root main section div span {
              border: 1px solid green;
              color: green;
            }
          `
        : null}
  `;

  return (
    <main>
      <GlobalStyle darkMode={darkMode} />
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <section className="flex flex-wrap justify-center gap-[20px] py-[20px]">
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </section>
    </main>
  );
}

export default App;
