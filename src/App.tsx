import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.css";

import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import { ButtonHTMLAttributes } from "react";
import Button from "./components/Button";
import { Route, Routes } from "react-router-dom";

import Hjem from "./pages/hjem";
import Kommende from "./pages/kommende";
import OmOss from "./pages/om_oss";
import Bilder from "./pages/bilder";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Hjem />} />
        <Route path="/kommende" element={<Kommende />} />
        <Route path="/om_oss" element={<OmOss />} />
        <Route path="/bilder" element={<Bilder />} />
      </Routes>
    </div>
  );
};

export default App;
