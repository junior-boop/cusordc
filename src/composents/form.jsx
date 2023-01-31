import React from 'react';
import './form.css'

export default function Basic_Form({children, style}){
    return(
        <div className="form basic" style={style}>
            {children}
        </div>
    )
}