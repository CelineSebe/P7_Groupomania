import { createContext, useState } from "react";


//création du context pour l'authentification
//stockage des données: token, userId etc

const defaultValue = {
    token: ""
}

const AuthContext = createContext(defaultValue);

//le context provider pour wrapper app.js
export const AuthContextProvider = (props => {
    const [token, useToken] = useState(null)

    const contextValue = {
        token: token,
    }

    return(
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
})

export default AuthContext;