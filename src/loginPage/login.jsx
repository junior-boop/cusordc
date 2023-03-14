import { useEffect, useState, useContext } from 'react'
import './login.css'
import { Champ } from '../Layouts/profils_modification'


export default function Login({onSubmit}) {

  return (
    <div className="Login">
        <div className="login_container container_logo">
            <div className="logo">
                    <img src="./logo_talents_pluriels.png" height={'100%'} alt="" />
            </div>
        </div>
        <div className="login_container">
           <div className="login_champ">
                <div className="login_header">
                    <div className="login_titre">
                        Connexion
                    </div>
                </div>
                <div className="login_content">
                    <div className='description'>
                        Les informations pour vous connecter à votre compte vous ont été envoyer, dans le mail de confirmation de votre candidature.
                        <br /> <br /> Bien vouloir consulter votre boite de reception.
                    </div>
                    <form onSubmit={onSubmit}  method="post">
                        <Champ type='email' titre={'Votre adresse E-mail '} style={{padding : 0}} styleInput={{backgroundColor : 'white'}}/>
                        <Champ type='password' titre={'Votre mot de passe '} style={{padding : 0}} styleInput={{backgroundColor : 'white'}}/>
                        <div className='btn'>
                            <button> Se connecter </button>
                        </div>
                    </form>
                </div>
           </div>
        </div>
    </div>
  )
}

 