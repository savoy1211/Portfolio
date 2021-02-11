import React from "react";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home2 from "./Home2";
import Type from "./Type";
import Particle from "../Particle";
import Project from "../Projects/Projects";

function Home() {
  return (

    <section className="">
      <Particle />
      <div className="container">
        <div className="container">
          <div className="row">
            <div style={{ paddingTop: 200 }} className="col-md-12">
              <h1  className="heading mt-5" style={{color: "white"}}>
                Hi There! <span className="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name" style={{color: "white"}}>
                I'm
                <strong className="main-name"> Ryan Lee</strong>
              </h1>

              <div className="col text-center ml-3" style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </div>

          </div>
        </div>
      </div>
      <Home2 />
      <Project />
    </section>
  );
}

export default Home;
