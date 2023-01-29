import React from 'react';
import Logo from '../composents/logo';
import Search_Bar from '../composents/search_bar';
import Profils from '../composents/profil';
import Touchable from '../composents/touchable';
import { IonSettingsSharp } from '../composents/Icons';

import './header.css'

export default function Header (){
    return(
        <section className='headerApp'>
            <div className="containerFull">
            <div className="logo_space">
                <Logo />
            </div>
            <div className='search_bar_space'>
                <Search_Bar />
            </div>
            <div className="profils_user_space">
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
            </div>
        </section>
    )
}

export function Composants_Header({ children }){
    return(
        <div className="composant_header">
            { children }
        </div>
    )
}