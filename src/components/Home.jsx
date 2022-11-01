import React from "react";
import "./Home.css";

function Home() {
    function circleClick() {
        window.location='/space#/destination/moon';
    }

    return (
        <div>
            <div className="container">
                <div className="left-side">
                    <p className="pre-space">SO, YOU WANT TO TRAVEL TO</p>
                    <h1 className="space">SPACE</h1>
                    <p className="post-space">Let’s face it; if you want to go to space, you might as well genuinely go to 
                        outer space and not hover kind of on the edge of it. Well sit back, and relax 
                        because we’ll give you a truly out of this world experience!
                    </p>
                </div>
                <div className="right-side">
                    <div onClick={circleClick} className="circle">
                        <h2 className="explore">EXPLORE</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;