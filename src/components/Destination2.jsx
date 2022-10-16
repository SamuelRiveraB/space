import React from "react";
import "./Destination.css";
import sourceImg from '../assets/destination/image-mars.png';
import DestinationContent from "./DestinationContent";

function Destination2() {
    const content = {
        title: "MARS",
        text: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        distance: "225 MIL. KM",
        time: "9 MONTHS"
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

export default Destination2;