import React from 'react';
import './progression.css'
import { CarbonCheckmarkFilled, CarbonCloseFilled, IonArrowForwardOutline } from './Icons';

export default function Objectif(){
    return(
        <div className="objectif">
            <div className="header">
                Votre progréssion
            </div>
            <div className="listeObjectif">
                <div>
                    <Element check topic={'Mettre à jour votre profils '} />
                    <Element check topic={'Mettre à jour votre profils '} />
                    <Element topic={'Être à jour sur les cours vidéos'} />
                </div>
                {/* <div className='all'>Afficher toute la liste <span>
                <IonArrowForwardOutline />
                    </span></div> */}
            </div>
            <div className="progression">
                <div className="progressionBar">
                    <div className="progressionState"></div>
                </div>
            </div>
        </div>
    )
}


function Element({ check, topic }){

    const element = !check ? (<CarbonCloseFilled style = {{
        color : 'white',
        width : 20,
        height : 20
    }} />) : (<CarbonCheckmarkFilled style = {{
        color : 'white',
        width : 20,
        height : 20
    }} />)

    return(
        <div className="objectifs">
            <div className="icons">
            <div style={{
                backgroundColor : !check ? '#ff0055' : '#519500', 
                }}>
               {element}
            </div>
            </div>
            <div className="topic">{topic}</div>
        </div>
    )
}