import React from "react";
import "./Destination.css";
import DestinationMenu from "./DestinationMenu";

function DestinationContent(props) {
    return (
        <div className="destination-right-side">
            <DestinationMenu />
            <h1 className="destination-title">{props.cont.title}</h1>
            <p className="destination-text">{props.cont.text}</p>
            <hr className="underline"/>
            <div className="bottom-container">
                <div className="bottom-left">
                    <p className="title-bottom-left">AVG. DISTANCE</p>
                    <p className="cont-bottom-left">{props.cont.distance}</p>
                </div>
                <div className="bottom-right">
                    <p className="title-bottom-right">EST. TRAVEL TIME</p>
                    <p className="cont-bottom-right">{props.cont.time}</p>
                </div>
            </div>
        </div>
    );
}

export default DestinationContent;