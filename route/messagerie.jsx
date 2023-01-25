import React from "react";
import Navigation from "../src/composents/Navbar";
import Inbox from "../src/Layouts/inbox";
import Screen from "../src/Layouts/screen";

export default function Messagerie(){
    return(
        <div>
            <Screen>
                <Navigation />
                <Inbox />
            </Screen>
        </div>
    )
}