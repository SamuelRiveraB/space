import React from "react";
import "./Crew.css";
import CrewMenu from "./CrewMenu";

function CrewContent(props) {
    return (
        <div className="crew-left-side">
            <p className="meet-your-crew"><strong className="title-number">02</strong>MEET YOUR CREW</p>
            <p className="crew-title">{props.cont.title}</p>
            <h1 className="crew-name">{props.cont.name}</h1>
            <p className="crew-text">{props.cont.text}</p>
            <CrewMenu />
        </div>
    );
}

export default CrewContent;