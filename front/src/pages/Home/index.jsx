import React from 'react'
// import DefaultImage from '../../assets/profile.jpg'
import styled from 'styled-components'
// import Publi from '../../components/Publi/index'
import ProfilInfo from '../../components/ProfilInfo/index'
import Header from '../../components/Header'
import TrendingInfo from '../../components/TrendingInfo'
import Card from '../../components/Publi/Card'
import { useContext } from 'react'
import AuthContext from '../../store/authContext'

// import PropTypes from 'prop-types'

const FeedContainer= styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
position: fixed;
top:100px;
padding: 5px;
width: 100%;
height: 100vh;
background-color: #F4F3F3;

@media screen and (max-width: 1023px){
display: flex;
flex-wrap: wrap;
justify-content: space-around;
align-items: flex-start;
}

@media screen and (max-width: 730px){
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
align-items: center;
text-align: center;
width: 15%;
height: 60vh;
margin: 25px 40px;
  @media screen and (max-width: 1023px)
  {
    height:150px;
    font-size: 8px;
    margin: 10px;
    &:nth-child(1)
    {
        order: 1;
    }
  }
  @media screen and (max-width: 730px){
    display: none;
  }
  `

const PostContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width:70%;
margin: 25px 0px;
@media screen and (max-width: 1023px){
  height: 80vh;
  margin: 5px 25px;
  width: 100%;
    &:nth-child(2)
    {
        order: 3;
    }
}
`
const TrendContainer = styled.div `
display: flex;
flex-direction: column;
align-items: center;
width: 15%;
height: 50vh;
margin: 25px 40px;
@media screen and (max-width: 1023px){
  height:150px;
    font-size: 8px;
    margin: 10px;
&:nth-child(3)
{
    order: 2;
}
}
`


function Home() {


  return (
  <> 
    <Header/>
    <>
      <FeedContainer >
        <ProfilContainer > 
          
            < ProfilInfo />
        </ProfilContainer>

        <PostContainer>
          <h1> Fil d'actu</h1>
            <Card />
            <Card />
            <Card />
            <Card />
        </PostContainer>
        
        <TrendContainer>
            <TrendingInfo />
        </TrendContainer>
      </FeedContainer>
    </>
</>
    );
}

export default Home


