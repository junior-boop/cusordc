import React from 'react';
import './profils_cadre.css'

export default function Profils_Cadre({ data }){
    console.log(data)
    return(
        <div className="profils_cadre">
            <div className="avatar_profils">
                <div className="avatar" style={{backgroundImage : `url(http://localhost:3000${data.image.path})`}}></div>
            </div>
            <div className="profils_name">
                <div className="name">{data.surname} {data.name}</div>
            </div>
        </div>
    )
}