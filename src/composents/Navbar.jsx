import React from "react";
import Logo from "./logo";

import './Navbar.css'
import Menu from "./menu";
import Objectif from "./progression";

export default function Navigation(){
    return(
        <div className="navbar">
            <div className="logo_space">
                <Logo />
            </div>
            <Menu />
            <Objectif />
        </div>
    )
}