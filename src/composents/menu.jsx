import React, { useEffect, useState } from 'react';
import './menu.css'
import {IonBriefcaseSharp, IonHomeSharp, IonMdBookmarks, IonMdChatbubbles} from './Icons'

export default function Menu(){
    return(
        <div className="menu">
            <MenuItem titre={'Accueil'} hash = {'/'}>
                <IonHomeSharp style = {{
                    height : 20,
                    width : 20,
                    color : '#555'
                }} />
            </MenuItem>
            <MenuItem titre={'Carrière'} hash = {'/carriere'}>
                <IonBriefcaseSharp style = {{
                        height : 20,
                        width : 20,
                        color : '#555'
                }} />
            </MenuItem>
            <MenuItem titre = {'Cours'} hash = {'/cours'} notice>
                <IonMdBookmarks style = {{
                        height : 24,
                        width : 24,
                        color : '#555'
                }} />
            </MenuItem>
            <MenuItem titre={'Messagerie'} hash = {'/messagerie'} notice>
                <IonMdChatbubbles style = {{
                        height : 24,
                        width : 24,
                        color : '#555'
                }} />
            </MenuItem>
        </div>
    )
}


function MenuItem({children, titre, hash, notice, newNotice}){
    const [pathCheck, setPathCheck] = useState(false)

    useEffect(() => {
        if(typeof window !== 'undefined'){
            if( hash === window.location.pathname){
                setPathCheck(true)
            }
        }
    }, [pathCheck])



    const validation = pathCheck ? '' : 'inactive'

    return(
        <div className="menuItem">
            <span className={`${validation}`}></span>
            <div className="icons">
                {children}
            </div>
            <div className="titre">
                {titre}
            </div>
            {
                notice 
                ? (<div className="icons">
                <div className="indice">+9</div>
            </div>) : null
            }
        </div>
    )
}