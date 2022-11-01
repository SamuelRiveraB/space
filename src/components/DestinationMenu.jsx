import React from "react";
import "./DestinationMenu.css";
import { Outlet, NavLink } from "react-router-dom";

function DestinationMenu() {
    return (
        <>
            <ul className="destination-menus">
                <li><NavLink className={({ isActive }) => (isActive ? "destination-menu destination-active":"destination-menu")} to="/space/destination/moon">MOON</NavLink></li>
                <li><NavLink className={({ isActive }) => (isActive ? "destination-menu destination-active":"destination-menu")} to="/space/destination/mars">MARS</NavLink></li>
                <li><NavLink className={({ isActive }) => (isActive ? "destination-menu destination-active":"destination-menu")} to="/space/destination/europa">EUROPA</NavLink></li>
                <li><NavLink className={({ isActive }) => (isActive ? "destination-menu destination-active":"destination-menu")} to="/space/destination/titan">TITAN</NavLink></li>
            </ul>
        <Outlet />
        </>
    );
}

export default DestinationMenu;