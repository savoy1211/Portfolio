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
            <br /> I am an undergraduate at University of California, Irvine intending to graduate in Spring 2021. 
            <br /> I am an aspiring software engineer with experience in developing web apps and data pipelines. 
            <br />
              Besides coding, I also enjoy bouldering, hiking, and listening to podcasts. 
          </p>
          <p>
          <br />

          {/* <div className="row" style={{ justifyContent: "center", paddingBottom: "10px" }}>
              <ul>
              <li className="about-activity">
                <i className="far fa-hand-point-right"></i> Bouldering
              </li>
              <li className="about-activity">
                <i className="far fa-hand-point-right"></i> Hiking
              </li>
              <li className="about-activity">
                <i className="far fa-hand-point-right"></i> 
              </li>
            </ul>
          </div> */}
          </p>
          <p style={{ marginBlockEnd: 0, color: "rgb(211,211,211)" }}>
            "Failure is central to engineering. Every single calculation that an engineer makes is a failure calculation. 
            <br />Successful engineering is all about understanding how things break or fail."{" "}
          </p>
          <footer className="blockquote-footer">Henry Petroski</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
