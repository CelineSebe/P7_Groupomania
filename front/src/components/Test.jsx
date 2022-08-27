
import React from 'react';
import { useContext } from 'react';
import AuthContext from '../store/authContext';

const Test = () => {

    const isLoggedIn = true;

const authCont = useContext(AuthContext);

    return(
        <>
        {isLoggedIn && <p style={{fontSize: 20}}> C'est un composant test </p>}
        {!isLoggedIn && <p>Vous n'êtes pas connecté</p>}
        {isLoggedIn && <p> Bienvenue, vous êtes connecté</p>}
        {isLoggedIn && <p> Votre token: {authCont.token}</p>}
        {isLoggedIn && <p> Votre userId: {authCont.userId} </p>}
        {isLoggedIn && <button> "Se déconnecter" </button>}



        </>
    )
}

export default Test;