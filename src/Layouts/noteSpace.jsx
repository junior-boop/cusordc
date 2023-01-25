import React from "react";
import Moment from "../components/moment";
import NoteContent from "../components/note";
import NoteItems from "../components/noteItem";
import './note.css'

export default function NoteSpace(){
    return(
        <div className="noteSpace">
            <Moment />
            <NoteScreen />
        </div>
    )
}


export function NoteScreen(){
    return(
        <div className="noteScreen">
            <div className="noteScreenList">
                <NoteItems />
                <NoteItems />
                <div className="vide"></div>
            </div>
            <div className="noteScreenDisplay">
                <NoteContent />
            </div>
        </div>
    )
}