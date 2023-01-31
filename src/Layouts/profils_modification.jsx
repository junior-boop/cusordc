import React, { useState , useEffect, useRef} from 'react'
import Composants from '../composents/composants'
import { Composants_Header } from './Header'
import Footer from '../composents/footer'

import './profils_page.css'
import Basic_Form from '../composents/form'
import { Avatar } from '../composents/avatar'

import FormatageTel from '../constante/formatage'
import { ReformatingDate } from '../constante/date'
import { IonAddOutline } from '../composents/Icons'


export default function Profils_Modification_Page(){

    const [tel, setTel] = useState('655776655')
    const [date, setDate] = useState('1998-01-27')

    useEffect(() => {
        let formating = new FormatageTel()

        formating.setvalue = tel
        setTel(formating.init())
    }, [tel])


    useEffect(() => {
        let Redate = new ReformatingDate()

        Redate.newDate = '07 Janvier 1998'
        setDate(Redate.newDate)
    }, [date])

    return(
        <div className="normal_container">
            <Header_Profils />
            <Composants>
                <Basic_Form>
                    <Composants_Header>
                        <span>Résumé</span>
                    </Composants_Header>
                    <div className='liste grid_list'>
                        <Champ titre={'Nom'} value = {'ATSIHIMEY'} />
                        <Champ titre={'Prénom'} value = {'Christine'} />
                        <Champ titre={'Date de naissance'} value = {date} type='date' onChange={({target}) => setDate(target.value)} />
                        <Champ titre={'Ville de residence'} value = {'Yaounde'} />
                        <Champ titre={'Numero de telephone'} value = {tel} onChange={({target}) => setTel(target.value)} type='tel'/>
                        <Champ titre={'Adresse E-mail'} value = {'christineatsihimay74@gmail.com'} type='email'/>
                    </div>
                </Basic_Form>
                <Composants_Header>
                    <span>Formations Professionnelles</span>
                </Composants_Header>
                    <Champ_pro titre={'Consultant a Eneo Cameroun'} year={2019} value = {'To put it mildly, some features of the mechanism may share attitudes on The Absorption of Up-To-Date Property '} />
                    <Champ_pro titre={'Consultant a Eneo Cameroun'} year={2017} value = {'To put it mildly, some features of the mechanism may share attitudes on The Absorption of Up-To-Date Property '} />
                    <NewChamp value={'Ajouter une formation'} />
                <Composants_Header>
                        <span>Experiences Professionnelles</span>
                    </Composants_Header>
                    <Champ_pro titre={'Consultant a Eneo Cameroun'} year={2019} value = {'To put it mildly, some features of the mechanism may share attitudes on The Absorption of Up-To-Date Property '} />
                    <Champ_pro titre={'Consultant a Eneo Cameroun'} year={2017} value = {'To put it mildly, some features of the mechanism may share attitudes on The Absorption of Up-To-Date Property '} />
                    <NewChamp value={'Ajouter une Experience'} />
            </Composants>
            <Footer />
        </div>
    )
}


function Champ({titre, type = 'text', value, onChange}){
    const [textareaheight, setTextareaheight] = useState(0)
    const textarea = useRef()

    useEffect(() => {
        if(typeof window !== 'undefined'){
            if(textarea.current !== undefined) {
                setTextareaheight(textarea.current.offsetHeight)
                console.log(textarea.current.offsetHeight)
            }
        }
    }, [textarea, textareaheight])

    

    return(
        <div className="champ">
            <div className="titre_champ">{titre}</div>
            {
                type === 'tel' 
                ? (
                    <div className='tel_champ'>
                        <div>+237</div>
                        <input type= {type}  className='value_champ_input' value={value} onChange={onChange} />
                    </div>
                )
                : type === 'textarea' 
                ? <textarea  className='value_champ_input' ref={textarea} value={value} onChange={onChange} />
                : <input type= {type}  className='value_champ_input' value={value} onChange={onChange} />
            }
        </div>
    )
}
function Champ_pro({titre, year, value, onChange}){

    const [yearvalue, setYear] = useState(year.toString())
    const [postvalue, setPostvalue] = useState(titre)
    const [descvalue, setDescvalue] = useState(value)
    
    useEffect(() => {
       if(typeof yearvalue === 'string' ){
        const newValue  = yearvalue.replace(/[^\d]/g, '').substring(0, 4)
        setYear(newValue)
       }
    }, [yearvalue])

    const handleTextArea = ({target}) => {
        setDescvalue(target.value)
        target.style.height = 'auto'
        target.style.height = target.scrollHeight + 'px'
    }

    return(
        <Basic_Form>
            <div className="champ pro liste">
                <Champ titre={'Annee'} value = {yearvalue} onChange={({target}) => setYear(target.value)} />
                <Champ titre={'Poste'} value = {postvalue} onChange={({target}) => setPostvalue(target.value)} />
                <Champ type='textarea' titre={'Description du poste'} value = {descvalue} onChange={handleTextArea} />
            </div>
        </Basic_Form>
    )
}

function NewChamp({value}){
    return(
        <Basic_Form style={{ backgroundColor : 'white' }}>
            <div className='new-champ'>
                <div>
                { value }
                </div>
                <div className="icon">
                    <IonAddOutline style = {{ 
                        width : 24, 
                        height : 24,
                        color : 'white'
                    }} />
                </div>
            </div>
        </Basic_Form>
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
                        <div className='modifier'>
                            Enregistrer
                        </div>
                    </div>
                </div>
            </div>
    )
}