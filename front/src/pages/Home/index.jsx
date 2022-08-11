import React from 'react'
// import DefaultImage from '../../assets/profile.jpg'
import styled from 'styled-components'
import Publi from '../../components/Publi/index'
import ProfilInfo from '../../components/ProfilInfo/index'
import Header from '../../components/Header'
// import PropTypes from 'prop-types'

const FeedContainer= styled.div`
display: flex;
justify-content: space-between;
background-color: #F4F3F3;
position: absolute;
top:100px;
right: 0px;
left: 0px;

`

const ProfilContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 25%;
height: 80vh;
margin: 40px;
position: fixed;
  top:100px;
  left: 5px;
  `

const ProfilContent = styled.div`
background-color: white;
border-radius: 4px;
width: 100%;
margin: 25px;
padding: 5px;`


const PostContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 50%;
/* margin: 40px; */
height: 100vh;
padding: 5px;
position: relative;
top: 100px;
left: 500px;
`
  
const PubliContent= styled.div`
background-color:  white;
width: 100%;
border-radius: 4px;
margin: 25px;
padding: 5px;`

const TrendContainer = styled.div `
display: flex;
flex-direction: column;
align-items: center;
width:25%;
margin: 25px;
padding: 5px;
position: fixed;
position: fixed;
  top:100px;
  right: 5px;
`
const TrendContent = styled.div`
height: 30vh;
width: 100%;
`


function Home() {
  
  return (
  <>
    <Header/>
    <FeedContainer >
      <ProfilContainer >
        <h1> Profil </h1>
        <ProfilContent>
          < ProfilInfo />
        </ProfilContent>
      </ProfilContainer>
      <PostContainer>
        <h1> Fil d'actualités </h1>
        <PubliContent>
          <Publi />
          <Publi />
          <Publi />
          <Publi />
        </PubliContent>
      </PostContainer>
      <TrendContainer>
        <h1> Trending</h1>
        <TrendContent>  
          
        </TrendContent>
      </TrendContainer>
      </FeedContainer>
    </>
    );
}

export default Home
