import React from "react";
import "./Technology.css";
import sourceImg from '../assets/technology/image-launch-vehicle-landscape.jpg';
import sourceImg2 from '../assets/technology/image-launch-vehicle-portrait.jpg';
import TechnologyContent from "./TechnologyContent";

function Technology1() {
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
        name: "LAUNCH VEHICLE",
        text: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
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

export default Technology1;