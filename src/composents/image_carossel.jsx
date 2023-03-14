import React from 'react'
import './image_carossel.css'
import {data} from '../database.json'

export default function Image_carossel_single({image}){

    return(
        <div className="image_element" style={{backgroundImage : `url(${image})`}} data-number = "single">

        </div>
    )
}
export function Image_carossel({image}){   
    return(
        <div className="image_element" style={{backgroundImage : `url(${image})`}} data-number = "multiple"></div>
    )
}