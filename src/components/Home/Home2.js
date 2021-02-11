import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Home2() {
  return (
    <Container fluid className="home-about-section mt-5" id="about">
      <Container>
        <Row  style={{ textAlign: "center" }}>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }} className="mt-5">
               <span className="purple"> About Me </span>
            </h1>
            <p className="home-about-body container" >
             I am passionate about programming and machine learning.
              <br />
              <br />Programming languages I'm most familiar with are
              <i>
                <b className="purple"> Python </b>
                and
                <b className="purple"> Javascript. </b>
              </i>
              <br />
              <br />
              I am also interested in  &nbsp;
              <i>
                <b className="purple">
                  Natural Language Processing.
                </b>
              </i>
              <br />
              <br />
              I enjoy spending time on side projects using modern technologies
             
               like
              <i>
                <b className="purple"> Node.js </b>
                and
                <b className="purple">  React.js</b>
              </i>
              
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            {/* <h1>FIND ME ON</h1> */}
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/savoy1211"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ryan-lee-662ba7183/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
