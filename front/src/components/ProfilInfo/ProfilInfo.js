import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
// import { useState, useContext } from 'react';
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

function ProfilInfo(props) {
  let pseudo = JSON.parse(localStorage.getItem('pseudo'))

  return (
    <>
      <ProfilContainer>
        <h1 style={{ textAlign: 'center', padding: 5, fontSize: '15px' }}>
          {' '}
          Profil de {pseudo}
        </h1>
      </ProfilContainer>
    </>
  )
}
export default ProfilInfo
