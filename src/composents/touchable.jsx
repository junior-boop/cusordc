import React from 'react';
import './touchable.css'
import { Link } from 'react-router-dom';

export default function Touchable({style, children, href = '/'}){
    return (
        <Link to = {href}>
            <div className="touchable" style={{...style}}>{children}</div>
        </Link>
    )
}