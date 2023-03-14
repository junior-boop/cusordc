import React, { useEffect, useState } from 'react';
import { IonArrowForwardOutline } from './Icons';
import './shot_resume.css'

import {useSignal, useAction} from '@dilane3/gx'


export default function Shot_Resume(){
    const [data_user, set_data_user] = useState({})

    
    const HandleUser = () => {
       if(localStorage.getItem('userAuthantif') !== null){
            const local =localStorage.getItem('userAuthantif')

            const data = JSON.parse(local)
            return data
       }
    }

    return (
        <div className="shot_resume">
            <div className="header">
                Votre Résumé
            </div>
            <div className="info">
                <div className="champ_resume">
                    <div className="index">Nom</div>
                    <div className="Valeur">{HandleUser().name.toLocaleUpperCase()}</div>
                </div>
                <div className="champ_resume">
                    <div className="index">Prenom</div>
                    <div className="Valeur">{HandleUser().surname.toLocaleUpperCase()}</div>
                </div>
                <div className="champ_resume">
                    <div className="index">Compétences</div>
                    <div className="Valeur">
                        <div>{HandleUser().profession}</div>
                    </div>
                </div>
            </div>
            <div className="plus">
                Voir plus 
                <span>
                <IonArrowForwardOutline style = {{
                    width : 20, height : 20, 
                }} />
                </span>
            </div>
        </div>
    )
}