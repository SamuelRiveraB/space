import React from "react";
import "./Crew.css";
import sourceImg from '../assets/crew/image-douglas-hurley.png';
import CrewContent from "./CrewContent";

function Crew1() {
    const content = {
        title: "COMMANDER",
        name: "DOUGLAS HURLEY",
        text: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    }

    return (
        <div className="crew-container">
            <CrewContent cont={content} />
            <div className="crew-right-side">
                <img src={sourceImg} className="crew-img" alt="crew-img" />
            </div>
        </div>
    );
}

export default Crew1;