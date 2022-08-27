import { createContext, useState } from "react";


//création du context pour l'authentification
//stockage des données: token, userId etc

const defaultValue = {
    token: "",
    userId: null,
    admin: null,
    isLoggedIn: false,
    login: () =>{},
    logout: () =>{},
};

const AuthContext = createContext(defaultValue);

//Contrôle dans le LS
const tokenLocalStorage = localStorage.getItem("token");
const userIdLocalStorage = localStorage.getItem("userId");
const adminLocalStorage = Number(localStorage.getItem("admin"))

//le context provider pour wrapper app.js
export const AuthContextProvider = (props) => {

// stokage du token, de l'userId, de l'état admin
const [token, setToken] = useState(tokenLocalStorage);
const [userId, setUserId] = useState(userIdLocalStorage);
const [admin, setAdmin] = useState(adminLocalStorage);

//fonction pour mettre à jour le token
const loginHandler = (token, userId, admin) => {
    setToken(token);
    setUserId(userId);
    setAdmin(admin);
    localStorage.setItem("token", token);
    }

//pour se déconnecter (faire passer le token à null)
const logoutHandler = () => {
    setToken(null);
    setUserId(null);
    setAdmin(null)
    //supprimer la donnée dans le local storage
    localStorage.clear();
  };


//s'il y présence du token ça veut dire que je suis loggé
//convertir le token en valeur booléenne
const userIsLoggedIn =!!token;
console.log("=> userIsLoggedIn");
console.log(userIsLoggedIn)

// valeurs du contexte
const contextValue = {
    token: token,
    userId: userId,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
};

    return(
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;