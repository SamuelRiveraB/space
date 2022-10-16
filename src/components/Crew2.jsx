import React from "react";
import "./Crew.css";
import sourceImg from '../assets/crew/image-mark-shuttleworth.png';
import CrewContent from "./CrewContent";

function Crew2() {
    const content = {
        title: "MISSION SPECIALIST",
        name: "MARK SHUTTLEWORTH",
        text: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
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

export default Crew2;