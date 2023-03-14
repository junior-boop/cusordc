import React, { useEffect, useState } from "react";
import '../../route/carriere.css'
import './service.css'
import { Link } from "react-router-dom";
import Screen from "./screen";
import { Paragraph, Titre, Titre_Paragraph } from "../composents/titre";
import Footer from "../composents/footer";
import Basic_Form from "../composents/form";
import { Composants_Header } from "./Header";
import { IcOutlinePlumbing, IcRoundDirectionsCar, IonCloseOutline, IonEdit, MapAccounting, MapElectrician, MingcuteStarFill, RiComputerFill } from "../composents/Icons";
import Navbar from "./navbar";
import { useLocation } from "react-router-dom/dist";


export default function Service_Page(){

    const [data, setData] = useState([])

    const TakeData = async() => {
        let headersList = {
            "Accept": "*",
            "User-Agent": "http://localhost:5173/",
        }

        let response = await fetch(`http://localhost:3000/services`, { 
            method: "GET",
            headers: headersList
        });
    
        let data = await response.json();
        return data
    }


    useEffect(() => {
        TakeData().then(d =>  {
            console.log(d)
            setData(d)
        })
    }, [])

    return(
        <div>
            <Screen>
                <Navbar/>
                <div className="item-2-place">
                    <Content>
                        <Header titre={'Services Offerts'} />
                        <div className="grid_onglet">
                            <Onglet general titre={'General'} search = {'general'} />
                            <Onglet titre={'Plomberie'} search = {'plomberie'} icon={<IcOutlinePlumbing style = {{ width : 36, height : 36}} />} />
                            <Onglet titre={'Électricité'} search = {'electricien'} icon={<MapElectrician style = {{ width : 36, height : 36}} />}/>
                            <Onglet titre={'Informatique'} search = {'informatique'} icon={<RiComputerFill style = {{ width : 36, height : 36}} />}/>
                            <Onglet titre={'Comptabilité'} search = {'comptabilite'} icon={<MapAccounting style = {{ width : 36, height : 36}} />}/>
                            <Onglet titre={'Chauffeur'} search = {'chauffeur'} icon={<IcRoundDirectionsCar style = {{ width : 36, height : 36}} />}/>
                        </div>
                        <div className="liste_services" style = {{ marginTop : 64}}>
                            <Titre style={{marginBottom : 24, color : '#444'}}>liste des services</Titre>
                            <div className="grid_services">
                                {
                                    data.map((el, key) => <Services name={el.name} prix={el.prix} key={key} image={el.images.path} id={el.id} />)
                                }
                            </div>
                        </div>
                    </Content>
                    <Description />
                    <Footer />
                </div>
            </Screen>
        </div>
    )
}

export function Content({children, style, className = ''}){
    return(
        <div className={`service_content ${className}`} style ={style} >{children}</div>
    )
}


function Header({titre}){
    return(
        <div className="onglet_header">
                <div>
                    <Titre style={{marginBottom : 0, color : '#444', fontSize : 36}}>{titre}</Titre>
                </div>
                <Link to = {'/service_edit'}  className="icon">
                    <IonEdit style = {{
                        width : 20,
                        height : 20,
                        color : 'var(--primary-color)'
                    }} />
                </Link>
        </div>
    )
}

function Infos_service({children}){
    
    return(
        <div className="infos_service">
            {children}
        </div>
    )
}

function Onglet({general, titre, icon, search}) {
    const [pince, setPince] = useState(false)
    const location = useLocation()
    
    useEffect(() => {
        const search_li = location.search.replace('?', '')
        const check = search_li.includes(search)
        if(check) setPince(true)
        else setPince(false)
        
        console.log(check)

    }, [location.search])

    return(
        <Link to = {{
            pathname : location.pathname,
            search : search ? search : ''
        }}>
            <div className="onglet_type">
                <div style={{
                    display : 'flex',
                    flexDirection : 'column',
                    alignItems : 'center',
                    gap : 7
                }}>
                    {general ? null : <div className="icon">{icon}</div>}
                    <div className="title">{general ? 'Général' : `${titre}`}</div>
                </div>
                <div className="pince">
                    <div style={{ backgroundColor : pince ? 'rgb(81, 149, 0)' : 'transparent', width : pince ? 50 : 10, height : 7, borderRadius : 10, transition : 'all .3s ease-in-out' }} />
                </div>
            </div>
        </Link>
    )
}

export function Description(){
    const location = useLocation()
    const [identify, setIdentify] = useState('')
    const [services, setServices] = useState({})

    const TakeData = async(id) => {
        let headersList = {
            "Accept": "*",
            "User-Agent": "http://localhost:5173/",
        }

        let response = await fetch(`http://localhost:3000/services/${id}`, { 
            method: "GET",
            headers: headersList
        });
    
        let data = await response.json();
        return data
    }

    

    useEffect(() => {
        if(location.search.includes('&')){
            const first = location.search.split('&')
            const second = first[1].split('=')
            const id = second[1]
            setIdentify(id)
        }
    }, [])

    useEffect(() => {
        TakeData(identify).then(data => console.log(data))
    }, [identify])

    return(
        <div className="description_services">
            <div className="header">
                <div className="icon">
                    <IonCloseOutline style = {{ width : 36, height : 36}}/>
                </div>
            </div>
            <div className="body_service">
                <div className="image"></div>
                <div className="desc">
                    <div className="name">
                        <div className="title"></div>
                        <div className="ville"></div>
                    </div>
                    <div className="description"></div>
                </div>
                <div className="btn"></div>
            </div>
            
        </div>
    )
}

function Services({name, prix, image, id}){
    const location = useLocation()
    return(
        <Link  to  = {{
            pathname : location.pathname,
            search : location.search + '&id=' + id
        }}>
            <div className="services_info">
                <div className="image" style={{ backgroundImage : `url(http://localhost:3000${image})`}}></div>
                <div className="desc" style={{ padding : '10px 16px'}}>
                    <div className="name" style={{fontSize : 16, fontWeight : 'bold'}}>{name}</div>
                    <div className="prix" style={{fontSize : 12, fontWeight : 'bold'}}>{prix}</div>
                </div>
            </div>
        </Link>
    )
}



export function Produits(){
    return(
        <div className="calque" style={{marginTop : 24}}>
             <Basic_Form>
                <Composants_Header>
                    Quelques Produits
                </Composants_Header>
                <div className="produits" style={{padding : '0 24px 24px'}}>
                    <Produit_Items image={'./pagne.jpeg'} name={'Pagne'} price={1234} />
                    <Produit_Items image={'./pagne.jpeg'} name={'Pagne'} price={1234} />
                    <Produit_Items image={'./pagne.jpeg'} name={'Pagne'} price={1234} />
                    <Produit_Items image={'./pagne.jpeg'} name={'Pagne'} price={1234} />
                    <Produit_Items image={'./pagne.jpeg'} name={'Pagne'} price={1234} />
                    <Produit_Items image={'./pagne.jpeg'} name={'Pagne'} price={1234} />
                </div>
            </Basic_Form>
            <Over_Icon />
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



export function Service({titre, texte, image}){
    return(
        <div className="service">
            <div className="titre">
                <Titre_Paragraph>
                    {titre}
                </Titre_Paragraph>
                <Paragraph>{texte}</Paragraph>
            </div>
            <div className="image" style={{backgroundImage : `url(${image})`}} />
        </div>
    )
}

export function Produit_Items({image, name, price}){
    return(
        <div className="produit_item">
            <div className="image" style={{backgroundImage : `url(${image})`}}></div>
            <div className="desc">
                <div className="desc-text">{name}</div>
                <div className="price">Prix : $ {price} </div>
            </div>
        </div>
    )
}

export function Over_Icon({url = "/"}){
    return(
        <Link to={url} className="over">
            <div className="icon">
                <IonEdit style = {{
                    width : 20,
                    height : 20,
                    color : 'white'
                }} />
            </div>
        </Link>
    )
}