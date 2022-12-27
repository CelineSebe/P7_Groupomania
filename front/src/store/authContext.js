import React from "react";
import { createContext, useState } from "react";

//création du context pour l'authentification
//stockage des données: token, userId,admin

const defaultValue = {
    pseudo: "",
    userId: null,
    token: "",
    admin: null,
    profil: null,
    isLoggedIn: false,
    login: () =>{},
    logout: () =>{},
};

const AuthContext = createContext(defaultValue);

//Contrôle dans le LS
const tokenLocalStorage = localStorage.getItem("token");
const userIdLocalStorage = localStorage.getItem("userId");
const adminLocalStorage = Number(localStorage.getItem("admin"));
const pseudoLocalStorage = localStorage.getItem("pseudo");
const profilLocalStorage = localStorage.getItem("profil");

//le context provider pour wrapper app.js
export const AuthContextProvider = (props) => {

// stokage du token, de l'userId, de l'état admin
const [token, setToken] = useState(tokenLocalStorage);
const [userId, setUserId] = useState(userIdLocalStorage);
const [admin, setAdmin] = useState(adminLocalStorage);
const [pseudo, setPseudo] = useState(pseudoLocalStorage);
const [profil, setProfile] = useState(profilLocalStorage);

//fonction pour mettre à jour le token
const loginHandler = (token, userId, pseudo) => {
    setToken(token);
    setUserId(userId);
    setAdmin(admin);
    setPseudo(pseudo);
    setProfile(profil);
    localStorage.setItem("token",(token));
    localStorage.setItem("userId",(userId));
    localStorage.setItem("admin",(admin));
    localStorage.setItem("pseudo",(pseudo));
    localStorage.setItem("profil",(profil));
    }

//pour se déconnecter (faire passer le token à null)
const logoutHandler = () => {
    setToken(null);
    setUserId(null);
    setAdmin(null);
    setPseudo(null);
    setProfile(null);

    //supprimer la donnée dans le local storage
    localStorage.clear();
  };


//s'il y présence du token ça veut dire que je suis loguée
//convertir le token en valeur booléenne
const userIsLoggedIn =!! token;
console.log("=> userIsLoggedIn");
console.log(userIsLoggedIn);

// valeurs du contexte
const contextValue = {
    pseudo: pseudo,
    token: token,
    userId: userId,
    admin: admin,
    profil: profil,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
};
console.log(contextValue);

    return(
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;