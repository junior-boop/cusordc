import React from 'react';
import Header_Publication from '../composents/header_publication';
import Container from '../composents/container';

import './publication.css'
import Carrossel from '../composents/Carrossel';
import Profils_Cadre from '../composents/profils_cadre';
import { data, data_2 } from '../database.json'
import Image_carossel_single, { Image_carossel } from '../composents/image_carossel';

const asset = data.assets

export function Publication_Annonce({publication_type, data}){
    return(
        <div className="publication_annonce">
            <div data-type = {publication_type}>
                <div className="desc" >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit id mollitia quo numquam cupiditate tempora in dicta dolorum unde molestiae!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit id mollitia quo numquam cupiditate tempora in dicta dolorum unde molestiae!
                    <div className="bouton">
                        <button>Lire plus</button>
                    </div>
                </div>
                {
                    publication_type === "carossel" 
                    ? (
                    <Carrossel>
                        <Profils_Cadre />
                        <Profils_Cadre />
                        <Profils_Cadre />
                        <Profils_Cadre />
                        <Profils_Cadre />
                    </Carrossel>) 
                    : publication_type === "service"
                    ? (<div className="image" />) 
                    : publication_type === "annonce" 
                    ? null 
                    : publication_type === "image"
                    ? (<Publication_image data = { data } />)
                    : null
                }
                
            </div>
        </div>
    )
}

export function Publication_image({ data }){
    const element = data.map((el, key) => <Image_carossel image = {el.url} key = {key} />)
    if(data.length > 1){
        return(
            <div>
                <Carrossel>
                    {element}
                </Carrossel>
            </div>
        )
    }

    if( data.length === 1){
        return <Image_carossel_single image = {data[0].url} />
    }
}

export function Publication({type, data}){
    return(
        <Container>
            <div className="publication">
                <Header_Publication />
                <Publication_Annonce publication_type={type} data = {data} />
            </div>
        </Container>
    )
}
