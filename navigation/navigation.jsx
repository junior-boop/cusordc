import React, { useEffect, useState } from "react";
import Accueil from "../route/accueil";
import Messagerie from "../route/messagerie";
import Profils_Route from "../route/profils";
import Header from "../src/Layouts/Header";


import {useLocation} from 'react-router-dom'
import AppRoute from "../route/Routes/Routes";

export default function Index(){
    return (
    <>
        <Header />
        <AppRoute />
    </>
    )
}