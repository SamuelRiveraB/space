import React from "react";
import "./Crew.css";
import sourceImg from '../assets/crew/image-victor-glover.png';
import CrewContent from "./CrewContent";

function Crew3() {
    const content = {
        title: "PILOT",
        name: "VICTOR GLOVER",
        text: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
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

export default Crew3;