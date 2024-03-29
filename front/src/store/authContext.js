import React from 'react'
import { createContext, useState } from 'react'

//création du context pour l'authentification
//stockage des données: token, userId,admin

const defaultValue = {
  pseudo: '',
  userId: null,
  token: '',
  admin: null,
  profil: null,
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
}

const AuthContext = createContext(defaultValue)

//Contrôle dans le LS
const tokenLocalStorage = localStorage.getItem('token')
const userIdLocalStorage = localStorage.getItem('userId')
const adminLocalStorage =
  localStorage.getItem('role') !== null
    ? Number(localStorage.getItem('role'))
    : null
const pseudoLocalStorage = localStorage.getItem('pseudo')


//le context provider pour wrapper app.js
export const AuthContextProvider = (props) => {
  // stokage du token, de l'userId, de l'état admin
  const [token, setToken] = useState(tokenLocalStorage)
  const [userId, setUserId] = useState(userIdLocalStorage)
  const [admin, setAdmin] = useState(adminLocalStorage)
  const [pseudo, setPseudo] = useState(pseudoLocalStorage)


  //fonction pour mettre à jour le token
  const loginHandler = (token, userId, pseudo) => {
    setToken(token)
    setUserId(userId)
    setAdmin(adminLocalStorage)
    setPseudo(pseudo)

    // localStorage.setItem('token', token)
    localStorage.setItem('userId', userId)
    localStorage.setItem('role', adminLocalStorage)
    localStorage.setItem('pseudo', pseudo)
  }

  //pour se déconnecter (faire passer le token à null)
  const logoutHandler = () => {
    setToken(null)
    setUserId(null)
    setAdmin(null)
    setPseudo(null)
    // setProfile(null)

    //supprimer la donnée dans le local storage
    localStorage.clear()
  }

  //s'il y présence du token ça veut dire que je suis loguée
  //convertir le token en valeur booléenne
  const userIsLoggedIn = !!token
  // console.log("=> userIsLoggedIn");
  // console.log(userIsLoggedIn);

  // valeurs du contexte
  const contextValue = {
    pseudo: pseudo,
    token: token,
    userId: userId,
    admin: admin,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext
