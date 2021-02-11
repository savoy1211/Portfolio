import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import homeLogo from "../../Assets/home-main.svg";
import Home2 from "./Home2";
import Type from "./Type";
import Particle from "../Particle";
import Project from "../Projects/Projects";

function Home() {
  return (

    <section className="m-5">
      <Particle />

      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row >
            {/* <Col md={12} className="home-header text-center"> */}
            <Col md={12} className="col text-center">
              <h1 style={{ paddingBottom: 15 }} className="heading mt-5">
                Hi There! <span className="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Ryan Lee</strong>
              </h1>

              <div className="col text-center ml-3" style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              {/* <img src={homeLogo} alt="home pic" className="img-fluid" /> */}
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <Project />
    </section>
  );
}

export default Home;
