import React from "react";
import "./TechnologyMenu.css";
import { Outlet, NavLink } from "react-router-dom";

function TechnologyMenu() {
    return (
        <>
            <div className="technology-menus">
                <NavLink className={({ isActive }) => (isActive ? "technology-circle technology-active":"technology-circle")} to="/space/technology/launch-vehicle"><span className="technology-number">1</span></NavLink>
                <NavLink className={({ isActive }) => (isActive ? "technology-circle technology-active":"technology-circle")} to="/space/technology/spaceport"><span className="technology-number">2</span></NavLink>
                <NavLink className={({ isActive }) => (isActive ? "technology-circle technology-active":"technology-circle")} to="/space/technology/space-capsule"><span className="technology-number">3</span></NavLink>
            </div>
        <Outlet />
        </>
    );
}

export default TechnologyMenu;