import React from "react";
import "./Technology.css";
import sourceImg from '../assets/technology/image-spaceport-landscape.jpg';
import sourceImg2 from '../assets/technology/image-spaceport-portrait.jpg';
import TechnologyContent from "./TechnologyContent";

function Technology2() {
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
        name: "SPACEPORT",
        text: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
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

export default Technology2;