import React from 'react'
// import DefaultImage from '../../assets/profile.jpg'
import styled from 'styled-components'
// import Publi from '../../components/Publi/index'
import ProfilInfo from '../../components/ProfilInfo/index'
import Header from '../../components/Header'
import TrendingInfo from '../../components/TrendingInfo'
import Card from '../../components/Publi/Card'

// import PropTypes from 'prop-types'

const FeedContainer= styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
position: fixed;
top:100px;
padding: 5px;
width: 100%;
background-color: #F4F3F3;
`

const ProfilContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
width: 20%;
height: 70vh;
margin: 25px;
  `

const PostContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width:60%;
margin: 25px;
`
const TrendContainer = styled.div `
display: flex;
flex-direction: column;
align-items: center;
width: 20%;
height: 50vh;
margin: 25px;
`


function Home() {
  
  return (
  <>
    <Header/>
    <FeedContainer >
      <ProfilContainer >
        <h1> Profil </h1>

          < ProfilInfo />

      </ProfilContainer>
      <PostContainer>
        <h1> Fil d'actu</h1>
         
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
 
      </PostContainer>
      <TrendContainer>
        <h1> Trending</h1>
          <TrendingInfo />

      </TrendContainer>
    </FeedContainer>
    </>
    );
}

export default Home


