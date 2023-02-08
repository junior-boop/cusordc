import React from 'react';
import './titre.css'

export function Titre({children, style}){
    return <div className="titre" style={style}>{children}</div>
}
export function Titre_Paragraph({children, style}){
    return <div className="titre_paragraphe" style={style}>{children}</div>
}
export function Paragraph({children, style, className}){
    return <div className={`paragraphe ${className}`} style={style}>{children}</div>
}