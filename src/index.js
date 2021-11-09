import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./styles/GlobalStyle";
import Typography from "./styles/Typography";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Typography />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
