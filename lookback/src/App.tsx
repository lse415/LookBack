import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import HomePage from "./pages/HomePage";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <HomePage />
    </>
  );
};

export default App;
