import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import axios from 'axios'
import { useState, useEffect } from 'react'
// import { useContext } from 'react'
// import AuthContext from '../../store/authContext'

const ProfilContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-color: ${colors.secondary};
  width: 600px;
  border: solid 2px ${colors.secondary};
  border-radius: 5px;
  margin-top: 40px;
  padding: 20px;
  &:hover {
    background-color: white;
    cursor: pointer;
  }
  @media screen and (max-width: 730px) {
    width: 70%;
    height: 70%;
    margin: 60px;
  }
`

function ProfilInfo({ pseudo }) {
  const [userData, setUserData] = useState('')
  const [userPseudo, setUserPseudo] = useState('')

  let token = JSON.parse(localStorage.getItem('token'))
  // const AuthCont = useContext(AuthContext)

  useEffect(() => {
    setUserPseudo(pseudo); // Mettre à jour userPseudo avec la valeur initiale de pseudo
  }, [pseudo]);

  useEffect(() => {
    axios({
      method: 'get',
      url: `http://localhost:5000/api/auth/oneuser/`,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        setUserData(res.data.imageUrlUser)
        setUserPseudo(res.data.pseudo)
        localStorage.setItem(
          'imageUrlUser',
          JSON.stringify(res.data.imageUrlUser)
        )
        localStorage.setItem(
          'pseudo',
          JSON.stringify(res.data.pseudo)
        )
      })

      .catch((error) => {
        console.log(error)
      })
  }, [userData])
  return (
    <>
      <ProfilContainer>
        <h1
          style={{
            textAlign: 'center',
            paddingBottom: '20px',
            fontSize: '15px',
          }}
        >
          {' '}
          Profil de {userPseudo}
        </h1>
        <img
          src={userData}
          style={{ height: '50%', width: '50%' }}
          alt="photo de profil"
        ></img>
      </ProfilContainer>
    </>
  )
}
export default ProfilInfo
