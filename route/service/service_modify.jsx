import { useEffect, useRef, useState } from "react";
import { Composants_Header } from "../../src/Layouts/Header";
import Navbar from "../../src/Layouts/navbar";
import { Champ } from "../../src/Layouts/profils_modification";
import Screen from "../../src/Layouts/screen";
import Footer from "../../src/composents/footer";
import Basic_Form from "../../src/composents/form";
import { Paragraph } from "../../src/composents/titre";
import { Content } from "../carriere";
import { Link } from "react-router-dom";

import './service_modify.css'
import FormatageTel from "../../src/constante/formatage";
import { IonClose } from "../../src/composents/Icons";

export default function Service_modify(){
    
    return(
        <div>
            <Screen>
                <Navbar/>
                <div className="item-2-place">
                    <Content>
                        <Header />
                        <Description />
                        
                        {/* <div className="infos">
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
                        <Description />
                        <Services />
                        <Produits /> */}
                    </Content>
                    <Footer />
                </div>
            </Screen>
        </div>
    )
}

export function Description(){
    const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptate eveniet beatae consequatur. Earum facilis velit repellendus et id odio reiciendis mollitia incidunt quasi, esse fugiat animi aspernatur minus nisi. Rem dignissimos adipisci velit, facilis dolorem debitis minus impedit praesentium reiciendis maxime odit eveniet suscipit omnis aperiam perferendis nemo! Id iusto perferendis quisquam placeat consequuntur at esse numquam obcaecati eligendi vel, beatae, quidem saepe, facere culpa vitae! Doloribus hic quo consequuntur impedit officiis cupiditate qui aliquam quam optio. Earum molestias velit, officiis dolore magnam obcaecati laudantium id atque ratione assumenda sed? Adipisci assumenda optio labore a earum aut ipsam natus aperiam voluptate consectetur unde quis libero consequatur dolores eius quas sed ut velit distinctio reprehenderit porro similique, nam exercitationem. Exercitationem vero praesentium consequuntur dolores corporis?'
    const [desc, setDesc] = useState(text)

    

   

    const handleLoad = ({target}) => {
        console.log(target, 'vide')
        target.style.height = 'auto'
        target.style.height = target.scrollHeight + 'px'
    } 
    const handleTextArea = ({target}) => {
        setDesc(target.value)
        target.style.height = 'auto'
        target.style.height = target.scrollHeight + 'px'
    }
    return(
        <div id="description" className="calque">
            <Basic_Form style={{paddingBottom : 24}}>
                <Composants_Header>
                    Description du Service
                </Composants_Header>
                <Champ  type="textarea" value={desc} onChange={handleTextArea} onLoad={handleLoad} />
            </Basic_Form>
            <Over_Icon />
        </div>
    )
}

export function Service(){
    return(
        <div id="services" className="calque">
            
        </div>
    )
}

export function Header(){
    const Titre = 'Christy Wax Shop'
    const Ville = 'Kinshasa'
    const [titre, setTitre] = useState(Titre)
    const [ville, setVille] = useState(Ville)
    const [tel, setTel] = useState('655776655')


    const [nameValue, setNameValue] = useState('Aucune image telecharger pour le moment')
    const [base64, setBase64] = useState('')


    const inputValue = useRef()
    
    useEffect(() => {
       if(typeof window !== 'undefined'){
            if(inputValue.current !== undefined){
                console.log(base64)
            }
       }
    }, [inputValue, base64])

    

    const handleInputChange = ({target}) => {
        setNameValue(target.files[0].name)

        if(!target.files || !target.files[0]) return;


        const FilesReader = new FileReader();
        FilesReader.readAsDataURL(target.files[0])

        FilesReader.addEventListener('load', (e) => {
           setBase64(e.target.result)
        })

    }

    useEffect(() => {
        let formating = new FormatageTel()

        formating.setvalue = tel
        setTel(formating.init())
    }, [tel])

    return(
        <div id="header" className="calque">
            <Basic_Form style={{paddingBottom : 24}}>
                <Composants_Header>
                    Informations principales
                </Composants_Header>
                <div>
                <div className="input_image_card">
                    <div className="affiche" style={{
                        backgroundImage : base64 !== '' ? `url(${base64})` : null
                    }}></div>
                    <div className="controle">
                        <div className="input_name">
                            {nameValue}
                        </div>
                        <div className="input_controler">
                            <input ref={inputValue} type="file" accept='.png, .jpg, .jpeg' onChange={handleInputChange}/>
                        </div>
                    </div>
                    
                </div>
                </div>
                <Champ titre={'Nom du Service'} value={titre} onChange={({target}) => setTitre(target.value)}/>
                <Champ titre={'Ville de résidence'} value={ville} onChange={({target}) => setVille(target.value)}/>
                <div className="tel_edit" >
                <Champ titre={'1er Numero de téléphone'}  type="tel" value={tel}  onChange={({target}) => setTel(target.value)}  />
                <Champ style={{marginTop : 0}} titre={'2eme Numero de téléphone'}    type="tel" value={tel}  onChange={({target}) => setTel(target.value)}  />
                </div>
            </Basic_Form>
            <Over_Icon />
        </div>
    )
}

export function Over_Icon({url = "/"}){
    return(
        <Link to={url} className="Save">
            <div className="icon">
                Enregistrer
            </div>
        </Link>
    )
}