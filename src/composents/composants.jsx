import React from 'react';

export default function Composants({children}){
    return (
        <div className="normal_container composant">
            {children}
        </div>
    )
}