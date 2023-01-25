import React from "react";
import './screen.css'

export default function Screen({children}){
    return <div className="screen">
        <div className="containerFull">
            {children}
        </div>
    </div>
}