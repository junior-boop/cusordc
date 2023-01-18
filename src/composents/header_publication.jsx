import React from 'react';
import { Avatar_publication } from './avatar';
import { IonEllipsisVertical } from './Icons';


import './header_publication.css'
import Touchable from './touchable';

export default function Header_Publication(){
    return(
        <div className="header_publication">
            <div>
                <div className='profils_name'>
                    <Avatar_publication />
                    <div>
                        <div className="name">Christine ATSIHIMAY</div>
                        <div className="sup_info">Yaounde - 11 decembre 2022</div>
                    </div>
                </div>
                <Touchable style={{ display : 'flex', alignItems : 'center', justifyContent : 'center', width : 40, height : 40, borderRadius : '50%'}}>
                    <IonEllipsisVertical style = {{ width : 20, height : 20}} />
                </Touchable>
            </div>
        </div>
    )
}