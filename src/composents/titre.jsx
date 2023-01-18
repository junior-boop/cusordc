import React from 'react';
import './titre.css'

export function Titre({children}){
    return <div className="titre">{children}</div>
}
export function Titre_Paragraph({children, style}){
    return <div className="titre_paragraphe" style={style}>{children}</div>
}
export function Paragraph({children}){
    return <div className="paragraphe">{children}</div>
}