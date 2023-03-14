import React, { useEffect, useRef, useState } from 'react';
import './carrossel.css'
import { IonArrowBackOutline, IonArrowForwardOutline } from './Icons';

export default function Carrossel ({children}){
    const [end, setEnd] = useState(0)
    const [carosselWidth, setCarosselWidth] = useState(0)
    const [move, setMove] = useState(0)
    const ref = useRef()
    const left = useRef()
    const right = useRef()
    const carossel = useRef()
    

    useEffect(() => {

        setEnd(ref.current.offsetWidth)
        setCarosselWidth(carossel.current.offsetWidth)
        console.log(ref.current.offsetWidth)
        
    }, [carossel, end, carosselWidth])

   
    useEffect(() => {
        if(end < 500){
            setMove(0)
        } else if(end > 500) {
            if(move < (carosselWidth - (end + 24))){
                setMove(carosselWidth - end)
            }
            if( move > 0) setMove(0)
        }
    }, [move, carosselWidth])

    const handleMoveLeft = () => {
        setMove(move + 200)
    }
    const handleMoveRight = () => {
        setMove(move - 200)
    }

    return(
        <div ref = {carossel} className="carrossel">
            <div ref={ref} className="carrossel_content" style={{ transform : `translateX(${move}px)`}}>
                {children.map((el, key) => <Test key = {key}>{el}</Test>)}
            </div>

            <div ref={left} className="btn_left" onClick={handleMoveLeft}>
            <IonArrowBackOutline style = {{ width : 24, height : 24, color : '#007497' }} />
            </div>
            <div ref={right} className="btn_right" onClick={handleMoveRight}>
            <IonArrowForwardOutline style = {{ width : 24, height : 24, color : '#007497' }} />
            </div>
        </div>
    )
}

const Test = ({children}) => {
    return(
        <div className="view">{children}</div>
    )
}