import React from 'react';
import './mainthread.css'
import Container from '../composents/container';
import { Notification_MainThread } from '../composents/notification';
import { Publication } from './publication';
import Liste_etudiant from './liste_etudiants';
import { Titre, Titre_Paragraph } from '../composents/titre';

import {data_2, data} from '../database.json'
import Search_Bar from '../composents/search_bar';

export default function MainThread(){
    return(
        <div className="mainthread">
            
            <section>
                <Liste_etudiant />
            </section>
            <section>
                <Container><Titre_Paragraph> Quelques annonces</Titre_Paragraph></Container>
                <Notification_MainThread />
                <Publication type={'service'} />
                <Publication type={'image'} data = { data.assets} />
                <Publication type={'annonce'} />
                <Publication type={'image'} data = { data_2.assets} />
                {/* <Publication type={'carossel'} />
                <Publication type={'carossel'} /> */}
                <Composants></Composants>
            </section>

        </div>
    )
}


const Composants = () => {
    return (
        <Container>
            bonjour
        </Container>
    )
}