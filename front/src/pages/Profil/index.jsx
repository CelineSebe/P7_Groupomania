import React from 'react'
import styled from 'styled-components'
import Header from '../../components/Header'
import ProfilInfo from '../../components/ProfilInfo/ProfilInfo'
import UpdateProfil from '../../components/ProfilInfo/UpdateProfil'
// import AuthContext from '../../store/authContext';
// import colors from '../../utils/style/colors';
// import InfiniteScroll from 'react-infinite-scroller';
// import Loading from '../../components/Loading';

const ProfilPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  `
  const ProfilInfoContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
   
    @media screen and (max-width: 730px) {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-items: center;
    }
  `

function Profil(props) {
  let pseudo = JSON.parse(localStorage.getItem('pseudo'))
  let userId = JSON.parse(localStorage.getItem('userId'))

  return (
    <>
      <Header />
      <ProfilPage>
        <h1 style={{ marginTop: "80px"}}> Bienvenue !</h1>
        <ProfilInfoContainer>
          <UpdateProfil />
          <ProfilInfo userId={userId} pseudo={pseudo}/>
        </ProfilInfoContainer>
      </ProfilPage>
    </>
  )
}

export default Profil
