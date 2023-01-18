import React, { useEffect, useRef, useState } from 'react';
import './search_bar.css'
import { IonClose, IonSearch } from './Icons';


export default function Search_Bar(){

    const [focus, setFocus] = useState(false)
    const [searchValue, setSearchValue] = useState('')
 
    const inputRef = useRef()

    useEffect(() => {
       if(typeof window !== 'undefined'){
            // if(!focus) inputRef.current.disabled = true;
            // else inputRef.current.disabled = false;

            // console.dir(inputRef.current)
       }
    }, [inputRef, focus])

    const handleClean = () => {
        setSearchValue('')
        setFocus(false)
    }

    useEffect(() => {
        if(searchValue === '' && searchValue.length === 0){
            setFocus(false)
        } else setFocus(true)
    }, [searchValue, focus])

    return(
        <div className="search_bar" data-focus = {`${focus}`}>
            <div className="icons">
            <IonSearch style = {{
                width : 24, 
                height : 24,
                color : '#555'
            }} />
            </div>
            <div className="search_space">
                <input  ref={inputRef} onFocus={({target}) => setFocus(!focus)} onChange={({target}) => setSearchValue(target.value)} value={searchValue} type="text" placeholder='Tapez votre recherche' />
            </div>
            <div className="icons" onClick = {handleClean}>
            <div>
            <IonClose  style = {{
                width : 28, 
                height : 28,
                color : '#555'
            }} />
            </div>
            </div>
        </div>
    )
}

