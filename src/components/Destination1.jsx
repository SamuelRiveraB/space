import React from "react";
import "./Destination.css";
import sourceImg from '../assets/destination/image-moon.png';
import DestinationContent from "./DestinationContent";

function Destination1() {
    const content = {
        title: "MOON",
        text: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance: "384,400 KM",
        time: "3 DAYS"
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

export default Destination1;