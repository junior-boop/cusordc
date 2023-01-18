import React from 'react';
import './touchable.css'

export default function Touchable({style, children}){
    return(
        <div className="touchable" style={{...style}}>{children}</div>
    )
}