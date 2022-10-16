import React from "react";
import "./Crew.css";
import sourceImg from '../assets/crew/image-anousheh-ansari.png';
import CrewContent from "./CrewContent";

function Crew4() {
    const content = {
        title: "FLIGHT ENGINEER",
        name: "ANOUSHEH ANSARI",
        text: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
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

export default Crew4;