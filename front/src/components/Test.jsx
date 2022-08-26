
import React from 'react';


const Test = () => {

    const isLoggedIn = false;
    return(
        <>
        {isLoggedIn && <p style={{fontSize: 20}}> C'est un composant test </p>}
        {!isLoggedIn && <p>Vous n'êtes pas connecté</p>}
        {isLoggedIn && <p> Bienvenue, vous êtes connecté</p>}
        {isLoggedIn && <p> Votre token: xxxxx</p>}
        {isLoggedIn && <p> Votre userId: xxxxx </p>}
        {isLoggedIn && <button> "Se déconnecter" </button>}



        </>
    )
}

export default Test;