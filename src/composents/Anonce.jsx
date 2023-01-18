import React from "react";
import './Anonce.css'

export default function Anonce(){
    let dates = new Date();
    let jour = dates.getDate;
    let mois = dates.getMonth;
    let heure = dates.getHours;
    return(
        <div>
            <div >
                <img className="profil" src="./christphoto.jpg"  width={'100%'} />
            </div>
                <h3>programme de formation  { jour } {mois}- 16h 00</h3>
                <div>
                    Lorem, ipsum do lor sit amet consectetur adipisicing elit. 
                    Unde ipsa nam ipsam ratione esse laudantium repellat enim adipisci nulla hic
                     dolor in et, maxime eveniet atque harum magnam 
                    reiciendis incidunt!
                </div>
                <div>
                    <img src="./art.jpg" alt="" />
                </div>
        </div>
       

    )
}