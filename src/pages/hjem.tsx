import React from "react";
// reactstrap components
import { Container, Row, Col } from "reactstrap";
import logo from "../assets/img/logos/lakmus.png";

const Hjem = () => {
  return (
    <div className="content-white">
      <Container className="logo-container">
        <div>
          <img src={logo} alt="Logo" className="logo" />
        </div>
      </Container>
    </div>
  );
};

export default Hjem;
