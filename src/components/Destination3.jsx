import React from "react";
import "./Destination.css";
import sourceImg from '../assets/destination/image-europa.png';
import { Outlet, Link } from "react-router-dom";

function Destination3() {
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
                        <li><Link className="destination-menu" to="/destination/mars">MARS</Link></li>
                        <li><Link className="destination-menu active" to="/destination/europa">EUROPA</Link></li>
                        <li><Link className="destination-menu" to="/destination/titan">TITAN</Link></li>
                    </ul>
                    <h1 className="destination-title">EUROPA</h1>
                    <p className="destination-text">The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
                        winter lover’s dream. With an icy surface, it’s perfect for a bit of 
                        ice skating, curling, hockey, or simple relaxation in your snug 
                        wintery cabin.
                    </p>
                    <hr className="underline"/>
                    <div className="bottom-container">
                        <div className="bottom-left">
                            <p className="title-bottom-left">AVG. DISTANCE</p>
                            <p className="cont-bottom-left">628 MIL. KM</p>
                        </div>
                        <div className="bottom-right">
                            <p className="title-bottom-right">EST. TRAVEL TIME</p>
                            <p className="cont-bottom-right">3 YEARS</p>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    );
}

export default Destination3;