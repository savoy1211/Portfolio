import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import woe from "../../Assets/Projects/wordorder_entropy3.png";
import jazz_solo_ratings from "../../Assets/Projects/jazz_solo_ratings.jpg";
import music_library from "../../Assets/Projects/music_library.jpg";
import albums_library from "../../Assets/Projects/albums_library.jpg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={woe}
              isBlog={false}
              title="Word Order Entropy Experiment"
              description="This project uses n-gram models to calculate the word order entropy of languages such as English, Dutch, Turkish, Mandarin, and Polish. For each language, we've created a corpus containing texts from Project Gutenberg."
              link="https://github.com/savoy1211/wordorder_info"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={jazz_solo_ratings}
              isBlog={false}
              title="Jazz Solo Ratings"
              description="This web app lets users discover and rate jazz solos. This app's API was made using NodeJS, the frontend was made using React, and MongoDB was used as the database."
              link="https://www.jazzsoloratings.com"
            />
          </Col>


          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eeg}
              isBlog={false}
              title="jazz_solo_ratings Predcition from EEG Signals"
              description="Using EEG signals from 'AMIGOS' Dataset to extract features and train a classifier that helps in detection of human jazz_solo_ratingss from Brain Signals."
              link="https://gist.github.com/soumyajit4419/dc94177bc4954752051798f88fbce1df"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medhub}
              isBlog={false}
              title="Making Healthcare Easy and Hassle Free"
              description="Extract, store and retrieve medical information from Medical Reports using OCR.
              Display the information online Graphically for the use of Patients as well as Doctors only with Authorised Access.
              Giving an complete health Analytics to doctors of Patients as well as Doctors preseving user privacy."
              link="https://github.com/soumyajit4419/MedHub_360"
            />
          </Col> */}
        </Row>
        <Row>
          
        <Col md={6} className="project-card">
            <ProjectCard
              imgPath={music_library}
              isBlog={false}
              title="Jazz Lib"
              
              description="Jazz Lib is a web app that lets users search and discover jazz albums by decade, year, country, label, and personnel."
              link="https://jazz-lib.herokuapp.com/"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={albums_library}
              isBlog={false}
              title="Spotify Albums Organizer"
              description="This desktop app lets users organize and visualize their saved Spotify albums by genre, year, and date added."
              link="https://github.com/savoy1211/spotify-albums-organizer"
            />
          </Col>
        </Row>
        {/* <h1 className="project-heading">
          My Recent <strong className="purple">Blog </strong> Posts
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my blogs</p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={algo}
              link=""
              title="Cracking Interview"
              site="gitbook.com"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={plant}
              link="https://medium.com/jovianml/plant-ai-c8fc95ed90e6"
              title="Plant AI"
              site="medium.com"
            />
          </Col>
        </Row> */}
      </Container>
    </Container>
  );
}

export default Projects;
