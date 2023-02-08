import React from "react";
import Navigation from "../src/composents/Navbar";
import Screen from "../src/Layouts/screen";
import './carriere.css'
import { Paragraph, Titre, Titre_Paragraph } from "../src/composents/titre";
import { IonEdit, MingcuteStarFill } from "../src/composents/Icons";
import Basic_Form from "../src/composents/form";
import { Composants_Header } from "../src/Layouts/Header";
import Footer from "../src/composents/footer";
import Navbar from "../src/Layouts/navbar";


export default function Carriere(){
    return(
        <div>
            <Screen>
                <Navbar/>
                <div className="item-2-place">
                    <Content>
                        <Header image={'pagne.jpeg'} titre={'Christy Wax Shop'} auteur={'Christine Atsihimey'}/>
                        <div className="infos">
                            <Infos_service>
                                <Titre_Paragraph>Contacts</Titre_Paragraph>
                                <Paragraph>
                                    (+243) 655 733 765 <br /> (+243) 682 235 615
                                </Paragraph>
                            </Infos_service>
                            <Infos_service>
                                <Titre_Paragraph>Ville de residence</Titre_Paragraph>
                                <Paragraph>
                                    Kinshasa
                                </Paragraph>
                            </Infos_service>
                            <Infos_service>
                                <Titre_Paragraph>Votre évaluation</Titre_Paragraph>
                                <Paragraph style={{ fontWeight : '700'}}>
                                    9.5 / 10
                                </Paragraph>
                                <StarLevel />
                            </Infos_service>
                        </div>
                        <Basic_Form>
                            <Composants_Header>
                                Description du Service
                            </Composants_Header>
                            <Paragraph className = 'desc'>
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptate eveniet beatae consequatur. Earum facilis velit repellendus et id odio reiciendis mollitia incidunt quasi, esse fugiat animi aspernatur minus nisi. Rem dignissimos adipisci velit, facilis dolorem debitis minus impedit praesentium reiciendis maxime odit eveniet suscipit omnis aperiam perferendis nemo! Id iusto perferendis quisquam placeat consequuntur at esse numquam obcaecati eligendi vel, beatae, quidem saepe, facere culpa vitae! Doloribus hic quo consequuntur impedit officiis cupiditate qui aliquam quam optio. Earum molestias velit, officiis dolore magnam obcaecati laudantium id atque ratione assumenda sed? Adipisci assumenda optio labore a earum aut ipsam natus aperiam voluptate consectetur unde quis libero consequatur dolores eius quas sed ut velit distinctio reprehenderit porro similique, nam exercitationem. Exercitationem vero praesentium consequuntur dolores corporis?
                            </Paragraph>
                        </Basic_Form>
                        <Basic_Form>
                            <Composants_Header>
                                Description du Service
                            </Composants_Header>
                            <Paragraph className = 'desc'>
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptate eveniet beatae consequatur. Earum facilis velit repellendus et id odio reiciendis mollitia incidunt quasi, esse fugiat animi aspernatur minus nisi. Rem dignissimos adipisci velit, facilis dolorem debitis minus impedit praesentium reiciendis maxime odit eveniet suscipit omnis aperiam perferendis nemo! Id iusto perferendis quisquam placeat consequuntur at esse numquam obcaecati eligendi vel, beatae, quidem saepe, facere culpa vitae! Doloribus hic quo consequuntur impedit officiis cupiditate qui aliquam quam optio. Earum molestias velit, officiis dolore magnam obcaecati laudantium id atque ratione assumenda sed? Adipisci assumenda optio labore a earum aut ipsam natus aperiam voluptate consectetur unde quis libero consequatur dolores eius quas sed ut velit distinctio reprehenderit porro similique, nam exercitationem. Exercitationem vero praesentium consequuntur dolores corporis?
                            </Paragraph>
                        </Basic_Form>
                    </Content>
                    <Footer />
                </div>
            </Screen>
        </div>
    )
}

export function Header({image, titre, auteur}){
    return(
        <div className="service_header">
            <div className="bannier" style={{ backgroundImage : `url(${image})`}}></div>
            <div className="header_titre">
                <div>
                    <Titre style={{marginBottom : 0, color : 'white'}}>{titre}</Titre>
                    <Paragraph style = {{margin : 0, color : 'white'}}>
                        Par {auteur}
                    </Paragraph>
                </div>
                <div className="icon">
                    <IonEdit style = {{
                        width : 20,
                        height : 20,
                        color : 'var(--primary-color)'
                    }} />
                </div>
            </div>
        </div>
    )
}

export function Infos_service({children}){
    return(
        <div className="infos_service">
            {children}
        </div>
    )
}

export function StarLevel(){
    return(
        <div className="starlevel">
            <MingcuteStarFill />
            <MingcuteStarFill />
            <MingcuteStarFill />
            <MingcuteStarFill />
            <MingcuteStarFill />
        </div>
    )
}

export function Content({children, style, className = ''}){
    return(
        <div className={`service_content ${className}`} style ={style} >{children}</div>
    )
}