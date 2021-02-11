import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote" >
          <p style={{ textAlign: "center" }}>
            Hi! I am <span className="green">Ryan Lee </span>
            from <span className="green"> Los Angeles, CA.</span>
            <br />I am a senior at University of California, Irvine pursuing a B.A. in Language Science.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <p>
          <div className="row" style={{ justifyContent: "center", paddingBottom: "10px" }}>
              <ul>
              <li className="about-activity">
                <i className="far fa-hand-point-right"></i> Record Collecting
              </li>
              <li className="about-activity">
                <i className="far fa-hand-point-right"></i> Bird Watching
              </li>
              <li className="about-activity">
                <i className="far fa-hand-point-right"></i> Travelling
              </li>
            </ul>
          </div>

          </p>


          <p style={{ marginBlockEnd: 0, color: "rgb(211,211,211)" }}>
            "Only from the heart can you touch the sky."{" "}
          </p>
          <footer className="blockquote-footer">Rumi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
