import React from "react";
import "./Destination.css";
import sourceImg from '../assets/destination/image-titan.png';
import DestinationContent from "./DestinationContent";

function Destination4() {
    const content = {
        title: "TITAN",
        text: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distance: "1.6 BIL. KM",
        time: "7 YEARS"
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

export default Destination4;