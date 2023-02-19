import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import axios from 'axios'
import { useState } from 'react'
// import AuthContext from '../../store/authContext';

const ProfilContainer = styled.div`
  border-color: ${colors.secondary};
  width: 100%;
  height: 50vh;
  border: solid 2px ${colors.secondary};
  border-radius: 5px;
  margin: 20px;
  &:hover {
    background-color: white;
    cursor: pointer;
  }
  @media screen and (max-width: 730px) {
    width: 70%;
  }
`

function ProfilInfo({ userId }) {
  const [userData, setUserData] = useState('')
  let pseudo = JSON.parse(localStorage.getItem('pseudo'))
  let token = JSON.parse(localStorage.getItem('token'))

  axios({
    method: 'get',
    url: `http://localhost:5000/api/auth/oneuser/`,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      // console.log(res.data.imageUrlUser)
      setUserData(res.data.imageUrlUser)
      // console.log(res.data)
    })

    .catch((error) => {
      console.log(error)
    })
  return (
    <>
      <ProfilContainer>
        <h1 style={{ textAlign: 'center', padding: 5, fontSize: '15px' }}>
          {' '}
          Profil de {pseudo}
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
