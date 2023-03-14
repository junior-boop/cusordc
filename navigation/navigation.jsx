import React, { useEffect, useState } from "react";
import Header from "../src/Layouts/Header";

import AppRoute from "../route/Routes/Routes";
import Global_Context from "../src/context/context_Globla";
import Login from "../src/loginPage/login";

export default function Index(){

    const [isActualyLogin, setLogin] = useState(false)
    const [login, settingLogin] = useState('')

    useEffect(() => {
        if(window.localStorage.getItem('userAuthantif') !== null) {
            setLogin(true)
        } else  setLogin(false)
    })

    useEffect(() => {
        console.log(isActualyLogin)
    }, [isActualyLogin])


    const handleSubmit = async (e) => {
        e.preventDefault()
        settingLogin('Attendre...')

        let headersList = {
            "Accept": "*",
            "User-Agent": "http://localhost:5173/",
        }

        let response = await fetch(`http://localhost:3000/login/${e.target[0].value}/${e.target[1].value}`, { 
            method: "GET",
            headers: headersList
        });
    
        let data = await response.json();
        if(data[0] !== undefined){
            localStorage.setItem('userAuthantif', JSON.stringify(data[0]))
            // location.reload()
            setLogin(true)

        } else {
            e.target[0].style.backgroundColor = '#ff005522'
            e.target[1].style.backgroundColor = '#ff005522'
        }
        settingLogin('LOGIN')

    }

    

    if(!isActualyLogin){
        return <Login onSubmit={handleSubmit} />
    } else return <RouteContext />

            
}


function RouteContext(){
    const [data, setData] =useState('')

        const ConnexionAPI = async() => {
        let headersList = {
            "Accept": "*",
            "User-Agent": "http://localhost:5173/",
        }
        
        let response = await fetch("http://localhost:3000/jaDiCR", { 
            method: "GET",
            headers: headersList
        });
        
        let data = await response.text();
        return data
        }

        useEffect(() => {
        
        ConnexionAPI().then(data => setData(data))

        }, [data])

    return(
        <>
            <Global_Context.Provider value={data}>
                <Header />
                <AppRoute />
            </Global_Context.Provider>
        </>
    )
}