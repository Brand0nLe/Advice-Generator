import React, { useState } from "react";
import { Container, Row, Col, } from "react-bootstrap";
import mobilePattern from "../assets/pattern-divider-mobile.svg";
import desktopPattern from "../assets/pattern-divider-desktop.svg";
import diceIcon from "../assets/icon-dice.svg";


const AdviceGenerator = () => {
  const [adviceData, setAdviceData] = useState({ slip_id: 0, advice: "" });

  const handleClick = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdviceData({ slip_id: data.slip.id, advice: data.slip.advice });
  };
  

  return (
    <Container fluid className="advice-generator-container align-items-center">
      <Row className="advice-generator-row ">
        <Col xs={12} lg={12} className="advice-generator-col">
          <div className="content text-center">
          <p className="slip-id">A&nbsp;&nbsp;D&nbsp;&nbsp;V&nbsp;&nbsp;I&nbsp;&nbsp;C&nbsp;&nbsp;E&nbsp;&nbsp;#&nbsp;&nbsp;{adviceData.slip_id.toString().split('').join(' ')}</p>
            <p className="advice">"{adviceData.advice}"</p>
            <img
              src={mobilePattern}
              alt="mobile pattern"
              className="mobile-pattern"
            />
            <img
              src={desktopPattern}
              alt="desktop pattern"
              className="desktop-pattern"
            />
            <button className="dice-button" onClick={handleClick}>
              <img src={diceIcon} alt="dice icon" className="dice-icon" />
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AdviceGenerator;
