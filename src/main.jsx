import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="body">
      <Header />
      <Main />
    </div>
  </React.StrictMode>
);
