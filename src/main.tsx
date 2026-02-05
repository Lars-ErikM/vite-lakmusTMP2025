import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import {
  HashRouter as Router, //Tidligere BrowserRouter
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";

//Bytte fra Router til HashRouter gjorde at appen funker også med base:<REPO> referanse - Funker fortsatt ikke i Github
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
);
