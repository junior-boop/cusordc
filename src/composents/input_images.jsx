import { useEffect, useRef, useState } from 'react'
import { IonClose } from './Icons'
import './input_image.css'

export default function Input_image({onClick, visible}){

    const [nameValue, setNameValue] = useState('Aucune image telecharger pour le moment')
    const [base64, setBase64] = useState('')

    const isVisible = visible ? 'novisible' : ''
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

    

    return(
        <div className={`input_image ${isVisible}`}>
            <div className="content">
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
                    <div onClick={onClick} className="close">
                        <IonClose style = {{
                            width : 24,
                            height : 24,
                            color : 'white'
                        }} />
                    </div>
                </div>
                <div onClick={onClick} className="background"></div>
            </div>
        </div>
    )
}