import React from 'react';
import './profil.css'
import { Avatar_profils } from './avatar';


export default function Profils(){
    return(
        
        <div className='profils'>
            <div className='user_name'>
                <div className='Nom'>Christine Atsihimay</div>
                <div className='id'>#1235489</div>
            </div>
            <Avatar_profils image={'christphoto.jpg'} /> 
            
        </div>
        

        
    )
}


