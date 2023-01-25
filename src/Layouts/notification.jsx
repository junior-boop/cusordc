import React from "react";
import './notification.css'
import Profils from "../composents/profil";
import Touchable from "../composents/touchable";
import { IonSettingsSharp } from "../composents/Icons";
import Shot_Resume from "../composents/shot_resume";


export default function LastSpace(){
    return (
    <div className="lastSpace">
        <div className="lastSpace_content">
            
            <Shot_Resume />
            <div style = {{
                marginTop : 24
            }}>
                Les Cours de cette Semaine
            </div>
        </div>
    </div>
    )
}