import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
// import pdf from "../../Assets/resume.pdf";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  // const [spojRank, upadteSpojRank] = useState(0);
  // const [hackerrank, upadteHackerank] = useState(0);
  // const [sem, upadateSem] = useState(0);
  // const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        // upadteSpojRank(res.data.message[0].spojRank);
        // upadteHackerank(res.data.message[1].hackerrank);
        // upadteCgpa(res.data.message[2].cgpa);
        // upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          {/* <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download Resume
          </Button> */}
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Relevant Experience</h3>
            <Resumecontent
              title="Research Assistant, UC Irvine"
              date="March 2020 - March 2021"
              content={[
                "Used machine learning techniques to quantify complexity in natural languages with Prof. Richard Futrell",
                "Created language models in Python to find entropies of word sequences using n-gram models",
                "Wrote Python scripts to generate multi-language corpora using a web-scraper",
                "Developed a web-interface for an online experiment using JavaScript, HTML, and CSS"
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Programming Club, Vice President"
              date="Sep 2018 – June 2019"
              content={[
                "Taught club members basics in Python, bash, and git",
                "Planned trips to programming seminars and hackathons",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="UC Irvine"
              date="2019 - Present"
              content={[`GPA: ${'3.98'}, Language Science B.A.`,
              'Deans Honors List: Fall 2019-Present',
              'Relevant Courses: Linguistic Data Science, Linear Algebra, Multivariable Calculus',
              
            ]}
            />
            <Resumecontent
              title="Santa Monica College"
              date="2017 - 2019"
              content={[
                'Deans Honors List',
                'Relevant Courses: Algorithms & Data Structures, Introduction to C++, Introduction to Statistics',
              ]}
            />
            <Resumecontent
              title="Carleton College"
              date="2015 - 2017"
              content={[]}
            />
          </Col>
        </Row>
    
      </Container>
    </Container>
  );
}

export default Resume;
