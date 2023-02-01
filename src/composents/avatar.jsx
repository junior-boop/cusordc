import React from 'react';
import './avatar.css'
import { IonEdit } from './Icons';

export function Avatar({image}){
    return(
        <div className="Avatar">
            <div className='avatar' style={{backgroundImage : `url(${image})`}} />
        </div>
    )
}
export function AvatarModifier({image, onClick}){
    return(
        <div className="Avatar modif">
            <div className='avatar' style={{backgroundImage : `url(${image})`}} />
            <div onClick={onClick} className="icon">
                <IonEdit style = {{
                    width : 20,
                    height : 20,
                    color : 'white'
                }} />
            </div>
        </div>
    )
}
export function Avatar_profils({image}){
    return(
        <div className="avatar_profils">
            <div className='avatar' style={{backgroundImage : `url(${image})`}} />
        </div>
    )
}
export function Avatar_publication({image}){
    return(
        <div className="avatar_publication">
            <div className='avatar' style={{backgroundImage : `url(./christphoto.jpg)`}} />
        </div>
    )
}