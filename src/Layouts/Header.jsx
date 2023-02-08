import React from 'react';
import Logo from '../composents/logo';
import Search_Bar from '../composents/search_bar';
import Profils from '../composents/profil';
import Touchable from '../composents/touchable';
import { IonSettingsSharp } from '../composents/Icons';

import { useLocation } from 'react-router-dom';

import './header.css'

export default function Header (){

    const {pathname} = useLocation()

    return(
        <section className='headerApp'>
            <div className="containerFull">
            <div className="logo_space">
                <Logo />
            </div>
            <div className='search_bar_space'>
                {
                    pathname === '/' 
                    ? <Search_Bar />
                    : null
                }
            </div>
            <div className="profils_user_space">
                {
                    pathname !== '/user' && pathname !== '/user_modification' 
                    ? (
                        <>
                            <Profils />
                            <Touchable
                            href={'/user'}
                            style={{
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
                        </>
                    )
                    : null
                }
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


