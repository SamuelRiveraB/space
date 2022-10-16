import React from "react";
import "./Destination.css";
import sourceImg from '../assets/destination/image-europa.png';
import DestinationContent from "./DestinationContent";

function Destination3() {
    const content = {
        title: "EUROPA",
        text: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        distance: "628 MIL. KM",
        time: "3 YEARS"
    }

    return (
        <div className="destination-container">
            <div className="destination-left-side">
                <p className="pick-your-destination"><strong className="title-number">01</strong>PICK YOUR DESTINATION</p>
                <img src={sourceImg} className="destination-img" alt="dst-img" />
            </div>
            <DestinationContent cont={content} />
        </div>
    );
}

export default Destination3;