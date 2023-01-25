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
            <div className="header">
                <Profils />
                <Touchable style={{
                    width : 50,
                    height : 50,
                    borderRadius : '50%',
                    display : 'flex',
                    alignItems : "center",
                    justifyContent : 'center' ,
                    border : '1px solid #f2f2f2'
                }}>
                    <div style={{
                        height : 24, width : 24
                    }}>
                    <IonSettingsSharp style = {{
                        width : 24,
                        height : 24,
                        color : '#555'
                    }} />
                    </div>
                </Touchable>
            </div>
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