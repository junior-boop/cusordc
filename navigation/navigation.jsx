import React, { useEffect, useState } from "react";
import Accueil from "../route/accueil";
import Messagerie from "../route/messagerie";

export default function Index(){
    const [navigation, setNavigation] = useState('')
    useEffect(() => {
        if(typeof window !== 'undefined'){
            const pathname = window.location.pathname
            console.log(pathname)

            switch (pathname) {
                case '/':
                    setNavigation(<Accueil />)
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

    return <>{navigation}</>
}