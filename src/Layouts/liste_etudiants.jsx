import React from 'react';
import Container from '../composents/container';

import { Titre, Titre_Paragraph } from '../composents/titre';
import Profils_Cadre from '../composents/profils_cadre';

import './liste_etudiants.css'
import Carrossel from '../composents/Carrossel';

export default function Liste_etudiant(){
    return(            
        <Container>
            <Titre_Paragraph style ={{
                marginBottom : 12
            }}>Les bénéficiaires</Titre_Paragraph>
            <div className="liste_content">
                <Carrossel>
                    <Profils_Cadre />
                    <Profils_Cadre />
                    <Profils_Cadre />
                    <Profils_Cadre />
                    <Profils_Cadre />
                    <Profils_Cadre />
                    <Profils_Cadre />
                    <Profils_Cadre />
                    <Profils_Cadre />
                    <Profils_Cadre />
                </Carrossel>
            </div>
        </Container>
    )
}