import React from "react";
import "./Technology.css";
import sourceImg from '../assets/technology/image-space-capsule-landscape.jpg';
import sourceImg2 from '../assets/technology/image-space-capsule-portrait.jpg';
import TechnologyContent from "./TechnologyContent";

function Technology3() {
    React.useEffect(() => {
        function responsiveImg() {
            if(window.innerWidth >= 1200) {
                document.getElementsByClassName("technology-img")[0].src = sourceImg2;
            } else {
                document.getElementsByClassName("technology-img")[0].src = sourceImg;
            }
        }
        window.addEventListener('resize', responsiveImg);
    })
    
    const content = {
        name: "SPACE CAPSULE",
        text: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    }

    return (
        <div className="technology-container">
            <TechnologyContent cont={content} />
            <div className="technology-right-side">
                <img src={sourceImg} className="technology-img" alt="technology-img" />
            </div>
        </div>
    );
}

export default Technology3;