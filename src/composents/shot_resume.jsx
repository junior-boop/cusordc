import React from 'react';
import { IonArrowForwardOutline } from './Icons';
import './shot_resume.css'

export default function Shot_Resume(){
    return (
        <div className="shot_resume">
            <div className="header">
                Votre Résumé
            </div>
            <div className="info">
                <div className="champ">
                    <div className="index">Nom</div>
                    <div className="Valeur">ATSIHIMAY</div>
                </div>
                <div className="champ">
                    <div className="index">Prenom</div>
                    <div className="Valeur">Christine</div>
                </div>
                <div className="champ">
                    <div className="index">Compétences</div>
                    <div className="Valeur">
                        <div>Developpeur Web</div>
                        <div>Marketiste</div>
                        <div>Couturiere Autodidacte</div>
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