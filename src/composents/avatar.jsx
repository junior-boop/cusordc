import React from 'react';
import './avatar.css'

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