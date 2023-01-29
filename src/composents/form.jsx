import React from 'react';
import './form.css'

export default function Basic_Form({children}){
    return(
        <div className="form basic">
            {children}
        </div>
    )
}