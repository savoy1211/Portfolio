import React from "react";
import Particles from "react-particles-js";

const styles = {
  root: {
    fontFamily: "sans-serif",
    textAlign: "center",
    height: "100%",
    background: "#222",
    display: "flex",
  }
};

function Particle() {
  return (
    <div style={{backgroundColor: "white"}}>
<Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 50
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />
    </div>

  );
}

export default Particle;
