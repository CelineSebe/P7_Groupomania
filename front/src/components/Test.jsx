
// import React from 'react';
// import { useContext } from 'react';
// import AuthContext from '../store/authContext';
// import Button from './Button';
// const Test = () => {

// const authCont = useContext(AuthContext);

// const isLoggedIn = authCont.isLoggedIn;

//     return(
//         <>
//         {isLoggedIn && <p style={{fontSize: 20}}> C'est un composant test </p>}
//         {!isLoggedIn && <p>Vous n'êtes pas connecté</p>}
//         {isLoggedIn && <p> Bienvenue, vous êtes connecté</p>}
//         {isLoggedIn && <p> Votre token: {authCont.token}</p>}
//         {isLoggedIn && <p> Votre userId: {authCont.userId} </p>}
//         {isLoggedIn && <Button onClick={authCont.logout}> "Se déconnecter" </Button>}
//         </>
//     )
// }

// export default Test;