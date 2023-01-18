import React from 'react';
import Container from './container';
import './notification.css'
import { Paragraph, Titre_Paragraph } from './titre';
import { IonCloseOutline } from './Icons';

export function Notification_MainThread({children}){
    return (
        <Container>
            <div className="notification_mainthread">
                <div>
                    <Titre_Paragraph>Toutes les infos et les annonces de la formation</Titre_Paragraph>
                    <Paragraph>It is obvious, that the framework of the essential component has the potential to improve or transform The Position of Continuous Architecture </Paragraph>
                </div>
                <div className="close">
                    <IonCloseOutline style = {{ width : '24px', height : '24px', color : 'white'}} />
                </div>
            </div>
        </Container>
    )
}