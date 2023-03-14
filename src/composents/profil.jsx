import React from 'react';
import './profil.css'
import { Avatar_profils } from './avatar';


export default function Profils(){

    const HandleUser = () => {
        if(localStorage.getItem('userAuthantif') !== null){
             const local =localStorage.getItem('userAuthantif')
 
             const data = JSON.parse(local)
             return data
        }
     }


    return(
        
        <div className='profils'>
            <div className='user_name'>
                <div className='Nom'>{HandleUser().surname} {HandleUser().name}</div>
                <div className='id'>#{HandleUser().Matricule}</div>
            </div>
            <Avatar_profils image={`http://localhost:3000${HandleUser().image.path}`} /> 
            
        </div>
        

        
    )
}


