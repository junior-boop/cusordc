import React, { useEffect, useState } from "react";
import Accueil from "../route/accueil";
import Messagerie from "../route/messagerie";
import Profils_Route from "../route/profils";
import Header from "../src/Layouts/Header";

export default function Index(){
    const [navigation, setNavigation] = useState('')
    useEffect(() => {
        if(typeof window !== 'undefined'){
            const pathname = window.location.pathname
            console.log(pathname)

            switch (pathname) {
                case '/':
                    setNavigation(<Profils_Route />)
                    break;
                case '/cours':
                    setNavigation(<Accueil />)
                    break;
                case '/messagerie':
                    setNavigation(<Messagerie />)
                    break;
                default:
                    setNavigation(<Accueil />)
                    break;
            }
        }
    }, [])

    return (
    <>
    <Header />
    {navigation}
    </>
    )
}