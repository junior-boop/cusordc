import React from "react";
import { Avatar_profils } from "../composents/avatar";
import { IcBaselineMenu, IonMdMore, IonMdSend } from "../composents/Icons";
import Touchable from "../composents/touchable";

import './inbox.css'

export default function Inbox(){
    return(
        <div>
            <Conversation />
        </div>
    )
}

function Conversation(){
    return(
        <div className="conversation_field">
            <div className="container">
                <Header />
                <Conversation_Liste />
                <InputType />
            </div>
        </div>
    )
}

function InputType(){
    return(
        <div className="inputType">
            <div className="icons">
                <IonMdMore />
            </div>
            <input type="text" />
            <Touchable>
                <IonMdSend />
            </Touchable>
        </div>
    )
}

function Header() {
    return(
            <div className="header">
                <Avatar_profils />
                <div>
                    <div className="nom">SEPPO EKE</div>
                    <div className="prenom">Daniel</div>
                </div>
            </div>
    )
}

function Conversation_Liste() {
    return(
        <div className="conversation">

        </div>
    )
}