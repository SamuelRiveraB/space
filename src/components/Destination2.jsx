import React from "react";
import "./Destination.css";
import sourceImg from '../assets/destination/image-mars.png';
import { Outlet, Link } from "react-router-dom";

function Destination2() {
    return (
        <div>
            <div className="destination-container">
                <div className="destination-left-side">
                    <p className="pick-your-destination"><strong className="title-number">01</strong>PICK YOUR DESTINATION</p>
                    <img src={sourceImg} className="destination-img" alt="dst-img" />
                </div>
                <div className="destination-right-side">
                    <ul className="destination-menus">
                        <li><Link className="destination-menu" to="/destination/moon">MOON</Link></li>
                        <li><Link className="destination-menu active" to="/destination/mars">MARS</Link></li>
                        <li><Link className="destination-menu" to="/destination/europa">EUROPA</Link></li>
                        <li><Link className="destination-menu" to="/destination/titan">TITAN</Link></li>
                    </ul>
                    <h1 className="destination-title">MARS</h1>
                    <p className="destination-text">Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
                        the tallest planetary mountain in our solar system. It’s two and a half times 
                        the size of Everest!
                    </p>
                    <hr className="underline"/>
                    <div className="bottom-container">
                        <div className="bottom-left">
                            <p className="title-bottom-left">AVG. DISTANCE</p>
                            <p className="cont-bottom-left">225 MIL. KM</p>
                        </div>
                        <div className="bottom-right">
                            <p className="title-bottom-right">EST. TRAVEL TIME</p>
                            <p className="cont-bottom-right">9 MONTHS</p>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    );
}

export default Destination2;