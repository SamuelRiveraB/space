import React from "react";
import "./Technology.css";
import TechnologyMenu from "./TechnologyMenu";

function TechnologyContent(props) {
    return (
        <>
            <div className="technology-left-side">
                <TechnologyMenu />
            </div>
            <div className="technology-center">
                <p className="space-launch"><strong className="title-number">03</strong>SPACE LAUNCH 101</p>
                <p className="the-terminology">THE TERMINOLOGY...</p>
                <h1 className="technology-name">{props.cont.name}</h1>
                <p className="technology-text">{props.cont.text}</p>
            </div>
        </>
    );
}

export default TechnologyContent;