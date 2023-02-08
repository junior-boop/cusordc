import React from 'react';
import { Avatar } from '../composents/avatar'
import Composants from '../composents/composants';

import './profils_page.css'
import Basic_Form from '../composents/form';
import { Composants_Header } from './Header';
import Footer from '../composents/footer';

import { Link } from 'react-router-dom';
import { Normale_Screen } from './screen';

export default function Profils_Page(){
    return(
        <Normale_Screen>
            <div style={{
                maxWidth : 1400,
                width : '100%',
                margin : '0 auto'
            }}>
                <div className="normal_container">
            <Header_Profils />
            <Composants>
                <Basic_Form>
                    <Composants_Header>
                        <span>Résumé</span>
                    </Composants_Header>
                    <div className='liste'>
                        <Champ titre={'Nom'} value = {'ATSIHIMEY'} />
                        <Champ titre={'Prénom'} value = {'Christine'} />
                        <Champ titre={'Date de naissance'} value = {'27 Janvier 1998'} />
                        <Champ titre={'Ville de residence'} value = {'Yaounde'} />
                        <Champ titre={'Numero de telephone'} value = {'+237 655 776 655'} />
                        <Champ titre={'Adresse E-mail'} value = {'christineatsihimay74@gmail.com'} />
                    </div>
                </Basic_Form>
                <div className="autre_personnel">
                    <div>
                    <Composants_Header>
                        <span>Langues</span>
                    </Composants_Header>
                    <Basic_Form style={{ height : 200, padding : 24}}>
                        <div className='liste'>
                            <Autre  value={'Français'}/>
                            <Autre  value={'Anglais'}/>
                            <Autre  value={'Lingala'}/>
                        </div>
                    </Basic_Form>
                    </div>
                    <div>
                    <Composants_Header>
                        <span>Centres D'intérêts</span>
                    </Composants_Header>
                    <Basic_Form style={{ height : 200, padding : 24 }}>
                        <div className='liste'>
                            <Autre  value={'Lecture'}/>
                            <Autre  value={'Developpement personnel'}/>
                            <Autre  value={'Haute couture'}/>
                            <Autre  value={'Voyage'}/>
                        </div>
                    </Basic_Form>
                    </div>
                </div>
                <Composants_Header>
                    <span>Formations Professionnelles</span>
                </Composants_Header>
                <Basic_Form>
                    <div className='liste'>
                        <Champ_pro titre={'Consultant a Eneo Cameroun'} year={2019} value = {'To put it mildly, some features of the mechanism may share attitudes on The Absorption of Up-To-Date Property '} />
                        <Champ_pro titre={'Consultant a Eneo Cameroun'} year={2017} value = {'To put it mildly, some features of the mechanism may share attitudes on The Absorption of Up-To-Date Property '} />
                    </div>
                </Basic_Form>
                    <Composants_Header>
                        <span>Experiences Professionnelles</span>
                    </Composants_Header>
                <Basic_Form>
                    <div className='liste'>
                        <Champ_pro titre={'Consultant a Eneo Cameroun'} year={2019} value = {'To put it mildly, some features of the mechanism may share attitudes on The Absorption of Up-To-Date Property '} />
                        <Champ_pro titre={'Consultant a Eneo Cameroun'} year={2017} value = {'To put it mildly, some features of the mechanism may share attitudes on The Absorption of Up-To-Date Property '} />
                        
                    </div>
                </Basic_Form>
            </Composants>
            <Footer />
            </div>
            </div>
        </Normale_Screen>
    )
}

function Champ({titre, value}){
    return(
        <div className="champ">
            <div className="titre_champ">{titre} </div>
            <div className="Valeur_champ">{value} </div>
        </div>
    )
}
function Autre({value}){
    return(
        <div className="champ autre">
            <div className="Valeur_champ">{value} </div>
        </div>
    )
}
function Champ_pro({titre, year, value}){
    return(
        <div className="champ pro">
            <div className="titre_champ_pro">
                <span>{titre}</span>
                <span>{year}</span>
            </div>
            <div className="Valeur_champ_pro">{value} </div>
        </div>
    )
}

export function Header_Profils(){
    return(
        <div className="header_profils">
                <div>
                    <Avatar image={'christphoto.jpg'}/>
                    <div className="infos_user">
                        <div className="name">
                            ATSIHIMEY
                        </div>
                        <div className="surname">
                            CHRISTINE
                        </div>
                        <div>
                            #1235489
                        </div>
                    </div>
                    <div style={{
                        height: 100,
                        display : 'flex',
                        alignItems : 'flex-end'
                    }}>
                        <Link to={'/user_modification'} className='modifier'>
                            Modifier
                        </Link>
                    </div>
                </div>
            </div>
    )
}