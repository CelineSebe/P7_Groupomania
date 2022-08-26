import { createContext, useState } from "react";


//création du context pour l'authentification
//stockage des données: token, userId etc

const defaultValue = {
    token: "",
    login: () =>{},
};

const AuthContext = createContext(defaultValue);

//le context provider pour wrapper app.js
export const AuthContextProvider = (props => {

    // stokage du token
    const [token, setToken] = useState(null)

    //fonction pour mettre à jour le token
    const loginHandler = (token) => {
    setToken(token);
    }

    // valeurs du contexte
    const contextValue = {
        token: token,
        login: loginHandler,
    }

    return(
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
})

export default AuthContext;