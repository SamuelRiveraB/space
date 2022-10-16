import React from "react";
import "./Technology.css";
import sourceImg from '../assets/technology/image-spaceport-portrait.jpg';
import TechnologyContent from "./TechnologyContent";

function Technology2() {
    const content = {
        name: "SPACEPORT",
        text: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    }

    return (
        <div className="technology-container">
            <TechnologyContent cont={content} />
            <div className="technology-right-side">
                <img src={sourceImg} className="technology-img" alt="technology-img" />
            </div>
        </div>
    );
}

export default Technology2;