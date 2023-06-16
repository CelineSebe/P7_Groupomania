import React from 'react'
// import DefaultImage from '../../assets/profile.jpg'
import styled from 'styled-components'
// import Publi from '../../components/Publi/index'
import ProfilInfo from '../../components/ProfilInfo/ProfilInfo'
import Header from '../../components/Header'
import Thread from '../../components/Thread'
import AuthContext from '../../store/authContext'
import { useContext } from 'react'

// import PropTypes from 'prop-types'

const FeedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: fixed;
  top: 60px;
  width: 100%;
  background-color: #f4f3f3;

  @media screen and (max-width: 1023px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
  }

  @media screen and (max-width: 730px) {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
  }
`
const ProfilContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  margin-top: 40px;
  /* width: 300px;
  height: 60vh; */
  /* margin: 25px 10px; */
  @media screen and (max-width: 1023px) {
    display: none;
    height: 12%;
    font-size: 8px;
    margin: 0px;
    &:nth-child(1) {
      order: 1;
    }
  }
`

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  margin: 10px 10px;
  @media screen and (max-width: 1023px) {
    margin: 0px 0px;
    width: 100%;
    &:nth-child(2) {
      order: 3;
    }
  }
`


function Home(props) {
  const authCont = useContext(AuthContext)
  const isLoggedIn = authCont.isLoggedIn

  return (
    <>
      <Header />
      <FeedContainer>
        <ProfilContainer>
          <ProfilInfo />
        </ProfilContainer>

        <PostContainer>
          <Thread />
        </PostContainer>
      </FeedContainer>
    </>
  )
}

export default Home
