import React, { useEffect, useState } from 'react';
import Container from '../composents/container';

import { Titre, Titre_Paragraph } from '../composents/titre';
import Profils_Cadre from '../composents/profils_cadre';

import './liste_etudiants.css'
import Carrossel from '../composents/Carrossel';

export default function Liste_etudiant(){
    const [data, setData] = useState([])

    const TakeData = async() => {
        let headersList = {
            "Accept": "*",
            "User-Agent": "http://localhost:5173/",
        }

        let response = await fetch(`http://localhost:3000/users`, { 
            method: "GET",
            headers: headersList
        });
    
        let data = await response.json();
        return data
    }


    useEffect(() => {
        TakeData().then(d =>  {
            setData(d)
        })
    }, [])

    return(            
        <Container>
            <Titre_Paragraph style ={{
                marginBottom : 12
            }}>Les bénéficiaires</Titre_Paragraph>
            <div className="liste_content">
                <Carrossel>
                    {
                        data.map((el, key) => <Profils_Cadre data={el} key={key} />)
                    }
                </Carrossel>
            </div>
        </Container>
    )
}